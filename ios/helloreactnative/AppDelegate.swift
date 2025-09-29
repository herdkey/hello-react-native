import UIKit
import React
import React_RCTAppDelegate   // still needed for factory types
import ReactAppDependencyProvider

// Detox reads these via KVC, so expose them.
@objcMembers
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    dynamic var reactNativeDelegate: ReactNativeDelegate?
    dynamic var reactNativeFactory: RCTReactNativeFactory?
    dynamic var rootViewFactory: RCTRootViewFactory? {
        reactNativeFactory?.rootViewFactory
    }

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        let rnDelegate = ReactNativeDelegate()
        rnDelegate.dependencyProvider = RCTAppDependencyProvider()

        let factory = RCTReactNativeFactory(delegate: rnDelegate)

        self.reactNativeDelegate = rnDelegate
        self.reactNativeFactory = factory

        let window = UIWindow(frame: UIScreen.main.bounds)
        self.window = window

        factory.startReactNative(
            withModuleName: "HelloReactNative",
            in: window,
            launchOptions: launchOptions
        )

        return true
    }
}

// Provide bundle URL for the **factory/bridgeless** path.
class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
    override func bundleURL() -> URL? {
        #if DEBUG
        return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
        #else
        return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        #endif
    }
}
