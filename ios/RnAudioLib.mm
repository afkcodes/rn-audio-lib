#import "RnAudioLib.h"
#import "rn_audio_lib-Swift.h"

@implementation RnAudioLib {
  RnAudioLibImpl *audioLibImpl;
}

RCT_EXPORT_MODULE()

- (instancetype) init {
  self = [super self];
  if (self) {
    audioLibImpl = [[RnAudioLibImpl alloc] initWithEventEmitter:self];
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRnAudioLibSpecJSI>(params);
}

+ (BOOL)requiresMainQueueSetup {
  return TRUE;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[@"playbackProgress"];
}

- (void)pause {
  [audioLibImpl pause];
}

- (void)play { 
  [audioLibImpl play];
}

- (void)setupQueue:(NSArray *)mediaUrls { 
  [audioLibImpl setupQueueWithMediaUrls: mediaUrls];
}

@end
