package com.rnaudiolib

import android.content.Context
import android.content.Intent
import com.blackend.udbhav.audiolib.AudioLibraryService
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RnAudioLibModule.NAME)
class RnAudioLibModule(reactContext: ReactApplicationContext) :
  NativeRnAudioLibSpec(reactContext) {

    private val audioServiceIntent = Intent(reactContext, AudioLibraryService::class.java)

  override fun getName(): String {
    return NAME
  }

  override fun setupQueue(context: Context?, mediaUrls: MutableList<String>?) {
    audioServiceIntent.action = "ACTION_SETUP_QUEUE"
    audioServiceIntent.putStringArrayListExtra("mediaUrls", mediaUrls as ArrayList<String>?)
    reactApplicationContext.startService(audioServiceIntent)
  }

  override fun play() {
    audioServiceIntent.action = "ACTION_PLAY"
    reactApplicationContext.startService(audioServiceIntent)
  }

  override fun pause() {
    audioServiceIntent.action = "ACTION_PAUSE"
    reactApplicationContext.startService(audioServiceIntent)
  }

  override fun stop() {
    audioServiceIntent.action = "ACTION_STOP"
    reactApplicationContext.startService(audioServiceIntent)
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
//  override fun multiply(a: Double, b: Double): Double {
//    return a * b
//  }

  companion object {
    const val NAME = "RnAudioLib"
  }
}
