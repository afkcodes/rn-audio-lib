//
//  RNEventEmitter.m
//  rn-audio-lib
//
//  Created by Jigneshkumar Gangajaliya on 06/01/25.
//
// Events
#import "RNEventEmitter.h"

static NSString *onMyEvent = @"playbackProgress";

// Variable to save the instance
static RNEventEmitter *eventEntiter = nil;

@implementation RNEventEmitter

// Exposing "EventEntiter" to React Native
RCT_EXPORT_MODULE(RNEventEmitter);

// Called from React Native
- (instancetype)init {
    if (self = [super init]) {
        eventEntiter = self;
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

+ (instancetype)shared {
    return eventEntiter;
}

// List of supported events
- (NSArray<NSString *> *)supportedEvents {
    return @[onMyEvent];
}

@end
