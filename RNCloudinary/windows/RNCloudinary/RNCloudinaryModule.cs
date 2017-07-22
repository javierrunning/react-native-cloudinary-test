using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNCloudinary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNCloudinaryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNCloudinaryModule"/>.
        /// </summary>
        internal RNCloudinaryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNCloudinary";
            }
        }
    }
}
