//
//  RNEventEmitter.h
//  rn-audio-lib
//
//  Created by Jigneshkumar Gangajaliya on 06/01/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RNEventEmitter : RCTEventEmitter

+(instancetype)shared;

@end
