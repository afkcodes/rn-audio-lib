//
//  RnAudioLibImpl.swift
//  rn-audio-lib
//
//  Created by Jigneshkumar Gangajaliya on 04/01/25.
//

import Foundation
import AVFoundation
import React

public protocol AudioPlayerDelegate {
  func timerProgress(_ timer: TimeInterval)
}

public class AudioPlayer {
  let audioPlayer = AVAudioPlayer()
  private var player: AVPlayer?
  private var url: URL?
  var delegate: AudioPlayerDelegate?
  
  public init() { }
  
  public func getMusicTimer() -> TimeInterval? {
    player?.currentItem?.asset.duration.seconds
  }
  
  public func initialSetup(url: URL, delegate: AudioPlayerDelegate) {
    self.url = url
    self.delegate = delegate
    let playerItem: AVPlayerItem = AVPlayerItem(url: url)
    player = AVPlayer(playerItem: playerItem)
    player?.volume = 1
    player?.addPeriodicTimeObserver(forInterval: CMTimeMakeWithSeconds(1, preferredTimescale: 2), queue: DispatchQueue.main) { (timer) -> Void in
      self.delegate?.timerProgress(timer.seconds)
    }
  }
  
  public func pause() {
    player?.pause()
  }
  
  public func play() {
    player?.play()
  }
}


@objc(RnAudioLibImpl)
public class RnAudioLibImpl: NSObject, AudioPlayerDelegate {
  
  let audioPlayer = AudioPlayer()
  
  private var eventEmitter: RCTEventEmitter?
  
  @objc public init(eventEmitter: RCTEventEmitter) {
    self.eventEmitter = eventEmitter
    super.init()
  }
  
  @objc public func play() {
    print("Play.......")
    audioPlayer.play()
  }
  
  @objc public func pause() {
    print("Pause.......")
    audioPlayer.pause()
  }
  
  @objc public func setupQueue(mediaUrls: [String]) {
    guard let firstURL = mediaUrls.first,
          let url = URL(string: firstURL) else { return }
    audioPlayer.initialSetup(url: url, delegate: self)
    print("mediaUrls.......", mediaUrls)
  }
  
  public func timerProgress(_ timer: TimeInterval) {
    print("Timer Running", timer)
    eventEmitter?.sendEvent(withName: EventType.playbackProgress.rawValue, body: timer)
  }
}
//
//@objc class EventEmitter: RCTEventEmitter {
//  
//  override init() {
//    super.init()
//  }
//  
//  @objc(supportedEvents)
//  override public func supportedEvents() -> [String] {
//    return EventType.allRawValues()
//  }
//
//  func emit(event: EventType, body: Any?) {
//    self.sendEvent(withName: event.rawValue, body: body)
//  }
//  
//  @objc override static func requiresMainQueueSetup() -> Bool {
//    return true
//  }
//}
//
enum EventType: String, CaseIterable {
  case playbackProgress = "playbackProgress"
  
  static func allRawValues() -> [String] {
    return allCases.map { $0.rawValue }
  }
}

