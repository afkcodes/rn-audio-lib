package com.rnaudiolib

import android.content.Intent
import com.blackend.udbhav.audiolib.AudioLibraryService
import com.blackend.udbhav.audiolib.AudioPlayerManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.modules.core.DeviceEventManagerModule
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch

@ReactModule(name = RnAudioLibModule.NAME)
class RnAudioLibModule(reactContext: ReactApplicationContext) :
  NativeRnAudioLibSpec(reactContext) {

    private val audioServiceIntent = Intent(reactContext, AudioLibraryService::class.java)
    private val audioPlayerManager = AudioPlayerManager(reactApplicationContext)

  override fun getName(): String {
    return NAME
  }

 override fun setupQueue(mediaUrls: ReadableArray?) {
    // Convert ReadableArray to MutableList<String>
    val mediaUrlsList = mutableListOf<String>()
    if (mediaUrls != null) {
      for (i in 0 until mediaUrls.size()) {
        mediaUrlsList.add(mediaUrls.getString(i))
      }
    }
   audioPlayerManager.setupQueue(mediaUrlsList)
  }

  override fun play() {
    audioPlayerManager.play()
  }

  override fun pause() {
    audioPlayerManager.pause()
  }

  override fun stop() {
    audioServiceIntent.action = "ACTION_STOP"
    reactApplicationContext.startService(audioServiceIntent)
  }

  override fun listenState() {
    CoroutineScope(Dispatchers.Main).launch {
      audioPlayerManager.playbackState.collectLatest {
        sendEvent("playbackState", it)
      }
    }
  }

  override fun listenProgress() {
    CoroutineScope(Dispatchers.Main).launch {
      audioPlayerManager.playbackProgress.collectLatest {
        sendEvent("playbackProgress", it.toString())
      }
    }
  }


  private fun sendEvent(eventName: String, data: Any) {
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(eventName, data)
  }

  companion object {
    const val NAME = "RnAudioLib"
  }
}
