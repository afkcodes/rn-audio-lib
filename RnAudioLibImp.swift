//
//  RnAudioLibImp.swift
//  rn-audio-lib
//
//  Created by Jigneshkumar Gangajaliya on 04/01/25.
//

import Foundation

@objc class RnAudioLibImp: NSObject {
  override init() {
    super.init()
  }
  
  @objc func getPermissionStatus() -> String {
    return "Permission Request"
  }
  
  @objc func requestPermission(onStatusChanged: @escaping (String) -> Void) {
    onStatusChanged("Permission Requested")
  }
}
