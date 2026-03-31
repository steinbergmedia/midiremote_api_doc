/**
 * @class MR_MidiRemoteAPI
 * Entry point to the **MIDI Remote API**.
 * @example
 * var midiremote_api = require('midiremote_api_v1')
 */
class MR_MidiRemoteAPI {
	constructor() {
		/**
		 * @property
		 */
		this.mDefaults = new MR_HostDefaults
	}
	
	/**
	 * Represents specific hardware device.
	 * @example
	 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
	 * @param {string} vendorName
	 * @param {string} deviceName
	 * @param {string} createdBy
	 * @returns {MR_DeviceDriver}
	 */
	makeDeviceDriver (/** @type {string} */vendorName, /** @type {string} */deviceName, /** @type {string} */createdBy)
	{
		return new MR_DeviceDriver
	}
}

/**
 * @typedef Integer
 * @type {number}
 */

/**
 * @typedef Text
 * @type {string}
 */

/**
 * @typedef Scalar
 * @type {number}
 */

/**
 * @typedef Bool
 * @type {boolean}
 */

/**
 * @typedef Byte
 * @type {number}
 */

/**
 * @typedef Uuid
 * @type {string}
 */

/**
 * @typedef Size
 * @type {number}
 */

/**
 * @typedef Index
 * @type {number}
 */

/**
 * @typedef Name
 * @type {string}
 */

/**
 * @typedef MidiMessage
 * @type {Array.<number>}
 */

/**
 * @typedef HostObjectClassID
 * @type {string}
 */

/**
 * @typedef HostObjectPath
 * @type {string}
 */

/**
 * @typedef HostValueTag
 * @type {number}
 */

/**
 * @class MR_HostDefaults
 */
class MR_HostDefaults {
	constructor() {
		/**
		 * @property
		 */
		this.mAppVersion = new MR_HostDefaultsAppVersion
	}
	
	/**
	 * @returns {string}
	 */
	getAppName ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfInsertEffectSlots ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfStripEffectSlots ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfSendSlots ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getNumberOfQuickControls ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomTalkbackChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomExternalInputChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomCueChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomPhonesChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxControlRoomMonitorChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxGainFactor ()
	{
		
	}
}

/**
 * @class MR_HostDefaultsAppVersion
 */
class MR_HostDefaultsAppVersion {
	constructor() {
	}
	
	/**
	 * @returns {string}
	 */
	getVersionString ()
	{
		
	}
}

/**
 * @class MR_ActiveDevice
 * Represents a detected and activated device of a specific [DeviceDriver](#devicedriver).
 */
class MR_ActiveDevice {
	constructor() {
	}
	
	/**
	 * @param {string} key
	 * @param {string} val
	 */
	setState (/** @type {string} */key, /** @type {string} */val)
	{
		
	}
	
	/**
	 * @param {string} key
	 * @returns {string}
	 */
	getState (/** @type {string} */key)
	{
		
	}
}

/**
 * @class MR_ActiveMapping
 */
class MR_ActiveMapping {
	constructor() {
	}
	
}

/**
 * @class MR_HostAction
 */
class MR_HostAction {
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostPluginParameterBankZoneAction
 * @augments MR_HostAction
 */
class MR_HostPluginParameterBankZoneAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostInsertEffectViewerAction
 * @augments MR_HostAction
 */
class MR_HostInsertEffectViewerAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MixerBankZoneAction
 * @augments MR_HostAction
 */
class MR_MixerBankZoneAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_TrackSelectionAction
 * @augments MR_HostAction
 */
class MR_TrackSelectionAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SubPageActionActivate
 * @augments MR_HostAction
 */
class MR_SubPageActionActivate extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SubPageAreaAction
 * @augments MR_HostAction
 */
class MR_SubPageAreaAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MappingPageActionActivate
 * @augments MR_HostAction
 */
class MR_MappingPageActionActivate extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_DeviceDriverAction
 * @augments MR_HostAction
 */
class MR_DeviceDriverAction extends MR_HostAction {
	constructor() {
		super()
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	trigger (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_DeviceDriver
 * Represents specific hardware device.
 * @example
 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
 */
class MR_DeviceDriver {
	constructor() {
		/**
		 * @property
		 */
		this.mPorts = new MR_Ports
		/**
		 * @property
		 */
		this.mSurface = new MR_DeviceSurface
		/**
		 * @property
		 */
		this.mMapping = new MR_FactoryMapping
		/**
		 * @property
		 */
		this.mAction = new MR_DeviceDriverActions
		/**
		 * @property
		 */
		this.mOnActivate = function (/** @type {MR_ActiveDevice} */activeDevice) { }
		/**
		 * @property
		 */
		this.mOnDeactivate = function (/** @type {MR_ActiveDevice} */activeDevice) { }
		/**
		 * @property
		 */
		this.mOnIdle = function (/** @type {MR_ActiveDevice} */activeDevice) { }
	}
	
	/**
	 * Define device auto detection.
	 * @example
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice IN')
	 *     .expectOutputNameEquals('SimpleDevice OUT')
	 *     
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
	 *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
	 * 
	 * @returns {MR_DeviceDetectionUnit}
	 */
	makeDetectionUnit ()
	{
		return new MR_DeviceDetectionUnit
	}
	
	/**
	 * @param {string} fileName
	 * @param {number} delayInMilliseconds
	 * @returns {MR_InitialSysexFile}
	 */
	setInitialSysexFile (/** @type {string} */fileName, /** @type {number} */delayInMilliseconds)
	{
		return new MR_InitialSysexFile
	}
	
	/**
	 * @param {string} fileName
	 * @returns {MR_UserGuide}
	 */
	setUserGuide (/** @type {string} */fileName)
	{
		return new MR_UserGuide
	}
}

/**
 * @callback OnActivate
 * @param {MR_ActiveDevice} activeDevice
 */

/**
 * @callback OnDeactivate
 * @param {MR_ActiveDevice} activeDevice
 */

/**
 * @callback OnActivateMappingPage
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 */

/**
 * @callback OnDeactivateMappingPage
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 */

/**
 * @callback DeviceDriverOnIdle
 * @param {MR_ActiveDevice} activeDevice
 */

/**
 * @class MR_Ports
 * Device driver sub section for creating midi port objects.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
class MR_Ports {
	constructor() {
	}
	
	/**
	 * Device driver MIDI input port.
	 * @example
	 * var midiInput = deviceDriver.mPorts.makeMidiInput()
	 * @param {string} name
	 * @returns {MR_DeviceMidiInput}
	 */
	makeMidiInput (/** @type {string} */name = '')
	{
		return new MR_DeviceMidiInput
	}
	
	/**
	 * Device driver MIDI output port.
	 * @example
	 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
	 * @param {string} name
	 * @returns {MR_DeviceMidiOutput}
	 */
	makeMidiOutput (/** @type {string} */name = '')
	{
		return new MR_DeviceMidiOutput
	}
}

/**
 * @class MR_DeviceMidiInput
 * Device driver MIDI input port.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 */
class MR_DeviceMidiInput {
	constructor() {
		/**
		 * @property
		 */
		this.mOnSysex = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MidiMessage} */message) { }
	}
	
}

/**
 * @callback OnSysex
 * @param {MR_ActiveDevice} activeDevice
 * @param {MidiMessage} message
 */

/**
 * @class MR_DeviceMidiOutput
 * Device driver MIDI output port.
 * @example
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
class MR_DeviceMidiOutput {
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {MidiMessage} message
	 */
	sendMidi (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MidiMessage} */message)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {string} fileName
	 * @param {number} delayMilliseconds
	 */
	sendSysexFile (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */fileName, /** @type {number} */delayMilliseconds)
	{
		
	}
}

/**
 * @class MR_DeviceSurface
 * Emulates hardware surface elements.
 * @example
 * var knob1 = deviceDriver.mSurface.makeKnob(0, 0, 1, 1.5)
 * var knob2 = deviceDriver.mSurface.makeKnob(1, 0, 1, 1.5)
 * var knob3 = deviceDriver.mSurface.makeKnob(2, 0, 1, 1.5)
 * var knob4 = deviceDriver.mSurface.makeKnob(3, 0, 1, 1.5)
 * 
 * // bind midi ports to surface elements
 */
class MR_DeviceSurface {
	constructor() {
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PushEncoder}
	 */
	makePushEncoder (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_PushEncoder
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Knob}
	 */
	makeKnob (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_Knob
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Fader}
	 */
	makeFader (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_Fader
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Button}
	 */
	makeButton (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_Button
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_ModWheel}
	 */
	makeModWheel (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_ModWheel
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PitchBend}
	 */
	makePitchBend (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_PitchBend
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_TriggerPad}
	 */
	makeTriggerPad (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_TriggerPad
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_PadXY}
	 */
	makePadXY (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_PadXY
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_JoyStickXY}
	 */
	makeJoyStickXY (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_JoyStickXY
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_Lamp}
	 */
	makeLamp (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_Lamp
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_BlindPanel}
	 */
	makeBlindPanel (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_BlindPanel
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @param {number} firstKeyIndex
	 * @param {number} lastKeyIndex
	 * @returns {MR_PianoKeys}
	 */
	makePianoKeys (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h, /** @type {number} */firstKeyIndex, /** @type {number} */lastKeyIndex)
	{
		return new MR_PianoKeys
	}
	
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} w
	 * @param {number} h
	 * @returns {MR_SurfaceLabelField}
	 */
	makeLabelField (/** @type {number} */x, /** @type {number} */y, /** @type {number} */w, /** @type {number} */h)
	{
		return new MR_SurfaceLabelField
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_ControlLayerZone}
	 */
	makeControlLayerZone (/** @type {string} */name)
	{
		return new MR_ControlLayerZone
	}
	
	/**
	 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
	 * @param {string} name
	 * @returns {MR_SurfaceCustomValueVariable}
	 */
	makeCustomValueVariable (/** @type {string} */name)
	{
		return new MR_SurfaceCustomValueVariable
	}
}

/**
 * @class MR_SurfaceElement
 */
class MR_SurfaceElement {
	constructor() {
	}
	
}

/**
 * @class MR_PushEncoder
 * @augments MR_SurfaceElement
 */
class MR_PushEncoder extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mEncoderValue = new MR_SurfaceElementValue
		/**
		 * @property
		 */
		this.mPushValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PushEncoder}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_Knob
 * @augments MR_SurfaceElement
 */
class MR_Knob extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Knob}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_Fader
 * @augments MR_SurfaceElement
 */
class MR_Fader extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @returns {MR_Fader}
	 */
	setTypeVertical ()
	{
		return this
	}
	
	/**
	 * @returns {MR_Fader}
	 */
	setTypeHorizontal ()
	{
		return this
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Fader}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_Button
 * @augments MR_SurfaceElement
 */
class MR_Button extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setTypePush ()
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setTypeToggle ()
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setShapeRectangle ()
	{
		return this
	}
	
	/**
	 * @returns {MR_Button}
	 */
	setShapeCircle ()
	{
		return this
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_Button}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_ModWheel
 * @augments MR_SurfaceElement
 */
class MR_ModWheel extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_ModWheel}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_PitchBend
 * @augments MR_SurfaceElement
 */
class MR_PitchBend extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PitchBend}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_TriggerPad
 * @augments MR_SurfaceElement
 */
class MR_TriggerPad extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_TriggerPad}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_PadXY
 * @augments MR_SurfaceElement
 */
class MR_PadXY extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mX = new MR_SurfaceElementValue
		/**
		 * @property
		 */
		this.mY = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_PadXY}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}

/**
 * @class MR_JoyStickXY
 * @augments MR_SurfaceElement
 */
class MR_JoyStickXY extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mX = new MR_SurfaceElementValue
		/**
		 * @property
		 */
		this.mY = new MR_SurfaceElementValue
	}
	
	/**
	 * @param {MR_ControlLayer} controlLayer
	 * @returns {MR_JoyStickXY}
	 */
	setControlLayer (/** @type {MR_ControlLayer} */controlLayer)
	{
		return this
	}
}



/**
 * @class MR_Lamp
 * @augments MR_SurfaceElement
 */
class MR_Lamp extends MR_SurfaceElement {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mSurfaceValue = new MR_SurfaceElementValue
	}
	
	/**
	 * @returns {MR_Lamp}
	 */
	setShapeRectangle ()
	{
		return this
	}
	
	/**
	 * @returns {MR_Lamp}
	 */
	setShapeCircle ()
	{
		return this
	}
}

/**
 * @class MR_BlindPanel
 * @augments MR_SurfaceElement
 */
class MR_BlindPanel extends MR_SurfaceElement {
	constructor() {
		super()
	}
	
	/**
	 * @returns {MR_BlindPanel}
	 */
	setShapeRectangle ()
	{
		return this
	}
	
	/**
	 * @returns {MR_BlindPanel}
	 */
	setShapeCircle ()
	{
		return this
	}
}

/**
 * @class MR_PianoKeys
 * @augments MR_SurfaceElement
 */
class MR_PianoKeys extends MR_SurfaceElement {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_SurfaceLabelField
 */
class MR_SurfaceLabelField {
	constructor() {
	}
	
	/**
	 * @param {MR_SurfaceElement} surfaceElement
	 * @returns {MR_SurfaceLabelField}
	 */
	relateTo (/** @type {MR_SurfaceElement} */surfaceElement)
	{
		return new MR_SurfaceLabelField
	}
}

/**
 * @class MR_ControlLayerZone
 */
class MR_ControlLayerZone {
	constructor() {
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_ControlLayer}
	 */
	makeControlLayer (/** @type {string} */name)
	{
		return new MR_ControlLayer
	}
}

/**
 * @class MR_ControlLayer
 */
class MR_ControlLayer {
	constructor() {
	}
	
}




/**
 * @class MR_SurfaceValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 */
class MR_SurfaceValue {
	constructor() {
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {string} value
	 */
	setDisplayValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {string}
	 */
	getDisplayValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
}

/**
 * @class MR_SurfaceElementValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
class MR_SurfaceElementValue extends MR_SurfaceValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mMidiBinding = new MR_SurfaceValueMidiBinding
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */value, /** @type {number} */diff) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
		/**
		 * @property
		 */
		this.mTouchState = new MR_SurfaceValueTouchState
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {string} value
	 */
	setDisplayValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {string}
	 */
	getDisplayValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
}

/**
 * @class MR_SurfaceCustomValueVariable
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
class MR_SurfaceCustomValueVariable extends MR_SurfaceValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mMidiBinding = new MR_SurfaceValueMidiBinding
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */value, /** @type {number} */diff) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
		/**
		 * @property
		 */
		this.mTouchState = new MR_SurfaceValueTouchState
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {number} value
	 */
	setProcessValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {number} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {number}
	 */
	getProcessValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @param {string} value
	 */
	setDisplayValue (/** @type {MR_ActiveDevice} */activeDevice, /** @type {string} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveDevice} activeDevice
	 * @returns {string}
	 */
	getDisplayValue (/** @type {MR_ActiveDevice} */activeDevice)
	{
		
	}
}

/**
 * @class MR_SurfaceValueMidiBinding
 */
class MR_SurfaceValueMidiBinding {
	constructor() {
	}
	
	/**
	 * @param {MR_DeviceMidiInput} inputPort
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setInputPort (/** @type {MR_DeviceMidiInput} */inputPort)
	{
		return this
	}
	
	/**
	 * @param {MR_DeviceMidiOutput} outputPort
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setOutputPort (/** @type {MR_DeviceMidiOutput} */outputPort)
	{
		return this
	}
	
	/**
	 * @param {boolean} isConsuming
	 * @returns {MR_SurfaceValueMidiBinding}
	 */
	setIsConsuming (/** @type {boolean} */isConsuming)
	{
		return this
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} pitch
	 * @returns {MR_MidiBindingToNote}
	 */
	bindToNote (/** @type {number} */channelNumber, /** @type {number} */pitch)
	{
		return new MR_MidiBindingToNote
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange}
	 */
	bindToControlChange (/** @type {number} */channelNumber, /** @type {number} */controlChangeNumber)
	{
		return new MR_MidiBindingToControlChange
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	bindToControlChange14Bit (/** @type {number} */channelNumber, /** @type {number} */controlChangeNumber)
	{
		return new MR_MidiBindingToControlChange14Bit
	}
	
	/**
	 * @param {number} channelNumber
	 * @param {number} controlChangeNumber
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	bindToControlChange14BitNRPN (/** @type {number} */channelNumber, /** @type {number} */controlChangeNumber)
	{
		return new MR_MidiBindingToControlChange14BitNRPN
	}
	
	/**
	 * @param {number} channelNumber
	 * @returns {MR_MidiBindingToPitchBend}
	 */
	bindToPitchBend (/** @type {number} */channelNumber)
	{
		return new MR_MidiBindingToPitchBend
	}
	
	/**
	 * @param {number} channelNumber
	 * @returns {MR_MidiBindingToChannelPressure}
	 */
	bindToChannelPressure (/** @type {number} */channelNumber)
	{
		return new MR_MidiBindingToChannelPressure
	}
}

/**
 * @class MR_MidiBindingValueRange7Bit
 */
class MR_MidiBindingValueRange7Bit {
	constructor() {
	}
	
}

/**
 * @class MR_MidiBindingValueRange14Bit
 */
class MR_MidiBindingValueRange14Bit {
	constructor() {
	}
	
}

/**
 * @class MR_MidiChannelBinding
 */
class MR_MidiChannelBinding {
	constructor() {
	}
	
}

/**
 * @class MR_MidiBindingToNote
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToNote extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToNote}
	 */
	setValueRange (/** @type {number} */min, /** @type {number} */max)
	{
		return new MR_MidiBindingToNote
	}
}

/**
 * @class MR_MidiBindingToControlChange
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setValueRange (/** @type {number} */min, /** @type {number} */max)
	{
		return new MR_MidiBindingToControlChange
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeAbsolute ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeSignedBit ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeBinaryOffset ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange}
	 */
	setTypeRelativeTwosComplement ()
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToControlChange14Bit
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange14Bit extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setValueRange (/** @type {number} */min, /** @type {number} */max)
	{
		return new MR_MidiBindingToControlChange14Bit
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeAbsolute ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeSignedBit ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeBinaryOffset ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14Bit}
	 */
	setTypeRelativeTwosComplement ()
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToControlChange14BitNRPN
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToControlChange14BitNRPN extends MR_MidiChannelBinding {
	constructor() {
		super()
	}
	
	/**
	 * @param {number} min
	 * @param {number} max
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setValueRange (/** @type {number} */min, /** @type {number} */max)
	{
		return new MR_MidiBindingToControlChange14BitNRPN
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeAbsolute ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeSignedBit ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeBinaryOffset ()
	{
		return this
	}
	
	/**
	 * @returns {MR_MidiBindingToControlChange14BitNRPN}
	 */
	setTypeRelativeTwosComplement ()
	{
		return this
	}
}

/**
 * @class MR_MidiBindingToPitchBend
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToPitchBend extends MR_MidiChannelBinding {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValueRange = new MR_MidiBindingValueRange14Bit
	}
	
}

/**
 * @class MR_MidiBindingToChannelPressure
 * @augments MR_MidiChannelBinding
 */
class MR_MidiBindingToChannelPressure extends MR_MidiChannelBinding {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValueRange = new MR_MidiBindingValueRange7Bit
	}
	
}


/**
 * @callback SurfaceValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} value
 * @param {number} diff
 */

/**
 * @callback SurfaceValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} value
 * @param {string} units
 */

/**
 * @callback SurfaceValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} objectTitle
 * @param {string} valueTitle
 */

/**
 * @callback SurfaceValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */

/**
 * @class MR_SurfaceValueTouchState
 * 
 * @example
 * var midiremote_api = require('midiremote_api_v1');
 * var deviceDriver = midiremote_api.makeDeviceDriver('DocuVendor', 'ExampleDevice Mk I', 'Example Author');
 * var fader = deviceDriver.mSurface.makeFader(0, 0, 1, 1)
 * fader.mSurfaceValue.mMidiBinding.setInputPort(midiIn).setOutputPort(midiOut).bindToControlChange(0, 64)
 * 
 * // backward compatibility: check API 1.1 feature exists
 * if(fader.mSurfaceValue.mTouchState) {
 *     var faderTouch = driver.mSurface.makeCustomValueVariable('faderTouch')
 *     faderTouch.mMidiBinding.setInputPort(midiIn).setOutputPort(midiOut).bindToNote(0, 64)
 *     fader.mSurfaceValue.mTouchState.bindTo(faderTouch)
 * }
 * 
 */
class MR_SurfaceValueTouchState {
	constructor() {
	}
	
	/**
	 * 
	 * @example
	 * var midiremote_api = require('midiremote_api_v1');
	 * var deviceDriver = midiremote_api.makeDeviceDriver('DocuVendor', 'ExampleDevice Mk I', 'Example Author');
	 * var fader = deviceDriver.mSurface.makeFader(0, 0, 1, 1)
	 * fader.mSurfaceValue.mMidiBinding.setInputPort(midiIn).setOutputPort(midiOut).bindToControlChange(0, 64)
	 * 
	 * // backward compatibility: check API 1.1 feature exists
	 * if(fader.mSurfaceValue.mTouchState) {
	 *     var faderTouch = driver.mSurface.makeCustomValueVariable('faderTouch')
	 *     faderTouch.mMidiBinding.setInputPort(midiIn).setOutputPort(midiOut).bindToNote(0, 64)
	 *     fader.mSurfaceValue.mTouchState.bindTo(faderTouch)
	 * }
	 * 
	 * @param {MR_SurfaceValue} boundSurfaceValue
	 */
	bindTo (/** @type {MR_SurfaceValue} */boundSurfaceValue)
	{
		return undefined
	}
}




/**
 * @class MR_Mapping
 */
class MR_Mapping {
	constructor() {
	}
	
}

/**
 * @class MR_FactoryMapping
 * @augments MR_Mapping
 */
class MR_FactoryMapping extends MR_Mapping {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_FactoryMappingPage}
	 */
	makePage (/** @type {string} */name)
	{
		return new MR_FactoryMappingPage
	}
}

/**
 * @callback MappingPageOnIdle
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 */

/**
 * @class MR_Page
 */
class MR_Page {
	constructor() {
		
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostValue} hostValue
	 * @returns {MR_ValueBinding}
	 */
	makeValueBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {MR_HostValue} */hostValue)
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {string} commandCategory
	 * @param {string} commandName
	 * @returns {MR_CommandBinding}
	 */
	makeCommandBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {string} */commandCategory, /** @type {string} */commandName)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostAction} hostAction
	 * @returns {MR_ActionBinding}
	 */
	makeActionBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {MR_HostAction} */hostAction)
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPageArea}
	 */
	makeSubPageArea (/** @type {string} */name)
	{
		return new MR_SubPageArea
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {string} text
	 * @returns {MR_Page}
	 */
	setLabelFieldText (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {string} */text)
	{
		return null
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_HostObject} hostObject
	 * @returns {MR_Page}
	 */
	setLabelFieldHostObject (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {MR_HostObject} */hostObject)
	{
		return null
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_SubPageArea} subPageArea
	 * @returns {MR_Page}
	 */
	setLabelFieldSubPageArea (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {MR_SubPageArea} */subPageArea)
	{
		return null
	}
}

/**
 * @class MR_FactoryMappingPage
 * @augments MR_Page
 */
class MR_FactoryMappingPage extends MR_Page {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mHostAccess = new MR_HostAccess
		/**
		 * @property
		 */
		this.mOnActivate = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping) { }
		/**
		 * @property
		 */
		this.mOnDeactivate = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping) { }
		/**
		 * @property
		 */
		this.mCustom = new MR_HostObjectUndefined
		/**
		 * @property
		 */
		this.mAction = new MR_MappingPageActions
		/**
		 * @property
		 */
		this.mOnIdle = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping) { }
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostValue} hostValue
	 * @returns {MR_ValueBinding}
	 */
	makeValueBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {MR_HostValue} */hostValue)
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {string} commandCategory
	 * @param {string} commandName
	 * @returns {MR_CommandBinding}
	 */
	makeCommandBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {string} */commandCategory, /** @type {string} */commandName)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {MR_SurfaceValue} surfaceValue
	 * @param {MR_HostAction} hostAction
	 * @returns {MR_ActionBinding}
	 */
	makeActionBinding (/** @type {MR_SurfaceValue} */surfaceValue, /** @type {MR_HostAction} */hostAction)
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPageArea}
	 */
	makeSubPageArea (/** @type {string} */name)
	{
		return new MR_SubPageArea
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {string} text
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldText (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {string} */text)
	{
		return new MR_FactoryMappingPage
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_HostObject} hostObject
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldHostObject (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {MR_HostObject} */hostObject)
	{
		return new MR_FactoryMappingPage
	}
	
	/**
	 * @param {MR_SurfaceLabelField} surfaceLabelField
	 * @param {MR_SubPageArea} subPageArea
	 * @returns {MR_FactoryMappingPage}
	 */
	setLabelFieldSubPageArea (/** @type {MR_SurfaceLabelField} */surfaceLabelField, /** @type {MR_SubPageArea} */subPageArea)
	{
		return new MR_FactoryMappingPage
	}
}

/**
 * @class MR_HostAccess
 * Provides objects and methods to bind the defined Surface to host functions.
 * @example
 * var hostSelectedTrackChannel = page.mHostAccess.mTrackSelection.mMixerChannel
 */
class MR_HostAccess {
	constructor() {
		/**
		 * @property
		 */
		this.mTransport = new MR_HostTransport
		/**
		 * @property
		 */
		this.mMixConsole = new MR_MixConsole
		/**
		 * @property
		 */
		this.mControlRoom = new MR_HostControlRoom
		/**
		 * @property
		 */
		this.mTrackSelection = new MR_TrackSelection
		/**
		 * @property
		 */
		this.mMouseCursor = new MR_HostMouseCursor
		/**
		 * @property
		 */
		this.mFocusedQuickControls = new MR_FocusedQuickControls
	}
	
	/**
	 * @param {MR_HostObject} hostObject
	 * @returns {MR_HostObjectDirectAccess}
	 */
	makeDirectAccess (/** @type {MR_HostObject} */hostObject)
	{
		return new MR_HostObjectDirectAccess
	}
}

/**
 * @class MR_HostObject
 */
class MR_HostObject {
	constructor() {
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostObjectUndefined
 * @augments MR_HostObject
 */
class MR_HostObjectUndefined extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {string} name
	 * @returns {MR_HostValueUndefined}
	 */
	makeHostValueVariable (/** @type {string} */name)
	{
		return new MR_HostValueUndefined
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostTransport
 * Access transport functions.
 * @augments MR_HostObject
 */
class MR_HostTransport extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValue = new MR_TransportValues
		/**
		 * @property
		 */
		this.mTimeDisplay = new MR_TransportTimeDisplay
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_QuickControls
 * @augments MR_HostObject
 */
class MR_QuickControls extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_QuickControlValue}
	 */
	getByIndex (/** @type {number} */index)
	{
		return new MR_QuickControlValue
	}
	
	/**
	 * @returns {number}
	 */
	getSize ()
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_FocusedQuickControls
 * @augments MR_HostObject
 */
class MR_FocusedQuickControls extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mFocusLockedValue = new MR_FocusedQuickControlsLockedStateValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_QuickControlValue}
	 */
	getByIndex (/** @type {number} */index)
	{
		return new MR_QuickControlValue
	}
	
	/**
	 * @returns {number}
	 */
	getSize ()
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostPluginParameterBankZone
 * @augments MR_HostObject
 */
class MR_HostPluginParameterBankZone extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mAction = new MR_HostPluginParameterBankZoneActions
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {boolean} wrapAround
	 * @returns {MR_HostPluginParameterBankZone}
	 */
	setWrapAround (/** @type {boolean} */wrapAround)
	{
		return this
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @returns {MR_HostPluginParameterBankValue}
	 */
	makeParameterValue ()
	{
		return new MR_HostPluginParameterBankValue
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotFolder
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotFolder extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mGate = new MR_HostStripEffectSlotGate
		/**
		 * @property
		 */
		this.mCompressor = new MR_HostStripEffectSlotCompressor
		/**
		 * @property
		 */
		this.mLimiter = new MR_HostStripEffectSlotLimiter
		/**
		 * @property
		 */
		this.mSaturator = new MR_HostStripEffectSlotSaturator
		/**
		 * @property
		 */
		this.mTools = new MR_HostStripEffectSlotTools
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SendSlotFolder
 * @augments MR_HostObject
 */
class MR_SendSlotFolder extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_SendSlot}
	 */
	getByIndex (/** @type {number} */index)
	{
		return new MR_SendSlot
	}
	
	/**
	 * @returns {number}
	 */
	getSize ()
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendSlotFolder
 * @augments MR_HostObject
 */
class MR_ControlRoomCueSendSlotFolder extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mBypass = new MR_ControlRoomCueSendFolderBypassValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_ControlRoomCueSendSlot}
	 */
	getByIndex (/** @type {number} */index)
	{
		return new MR_ControlRoomCueSendSlot
	}
	
	/**
	 * @returns {number}
	 */
	getSize ()
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MixerBankChannel
 * @augments MR_HostObject
 */
class MR_MixerBankChannel extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValue = new MR_MixerChannelValues
		/**
		 * @property
		 */
		this.mPreFilter = new MR_PreFilter
		/**
		 * @property
		 */
		this.mChannelEQ = new MR_ChannelEQ
		/**
		 * @property
		 */
		this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects
		/**
		 * @property
		 */
		this.mSends = new MR_SendSlotFolder
		/**
		 * @property
		 */
		this.mCueSends = new MR_ControlRoomCueSendSlotFolder
		/**
		 * @property
		 */
		this.mQuickControls = new MR_QuickControls
		/**
		 * @property
		 */
		this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {string}
	 */
	getUniqueIDString (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SelectedTrackChannel
 * @augments MR_HostObject
 */
class MR_SelectedTrackChannel extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValue = new MR_MixerChannelValues
		/**
		 * @property
		 */
		this.mPreFilter = new MR_PreFilter
		/**
		 * @property
		 */
		this.mChannelEQ = new MR_ChannelEQ
		/**
		 * @property
		 */
		this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects
		/**
		 * @property
		 */
		this.mSends = new MR_SendSlotFolder
		/**
		 * @property
		 */
		this.mCueSends = new MR_ControlRoomCueSendSlotFolder
		/**
		 * @property
		 */
		this.mQuickControls = new MR_QuickControls
		/**
		 * @property
		 */
		this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {string}
	 */
	getUniqueIDString (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostMouseCursor
 * @augments MR_HostObject
 */
class MR_HostMouseCursor extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mValueUnderMouse = new MR_HostValueAtMouseCursor
		/**
		 * @property
		 */
		this.mValueLocked = new MR_HostValueAtMouseCursorLockedState
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelMain
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelMain extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mListenEnabledValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mListenLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mDimActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickPanValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mReferenceLevelEnabledValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
	 */
	getSelectSourceCueValueByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomSelectSourceCueValueByIndex
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelPhonesByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelPhonesByIndex extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mListenEnabledValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mListenLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mDimActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickPanValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
	 */
	getSelectSourceCueValueByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomSelectSourceCueValueByIndex
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelCueByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelCueByIndex extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectSourceAuxValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mTalkbackEnabledValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mTalkbackLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMetronomeClickPanValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelExternalInputByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelExternalInputByIndex extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelTalkbackByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelTalkbackByIndex extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomChannelMonitorByIndex
 * @augments MR_HostObject
 */
class MR_HostControlRoomChannelMonitorByIndex extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mMuteValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mBypassInserts = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoom
 * @augments MR_HostObject
 */
class MR_HostControlRoom extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mMainChannel = new MR_HostControlRoomChannelMain
		/**
		 * @property
		 */
		this.mAlertDimActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mTalkbackActiveValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mTalkbackDimLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mListenDimLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mReferenceLevelValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mSelectNextDownmixPresetValue = new MR_HostControlRoomValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelCueByIndex}
	 */
	getCueChannelByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomChannelCueByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelPhonesByIndex}
	 */
	getPhonesChannelByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomChannelPhonesByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelExternalInputByIndex}
	 */
	getExternalInputChannelByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomChannelExternalInputByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelTalkbackByIndex}
	 */
	getTalkbackChannelByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomChannelTalkbackByIndex
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostControlRoomChannelMonitorByIndex}
	 */
	getMonitorChannelByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomChannelMonitorByIndex
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectSourceExternalInputValueByIndex}
	 */
	getSelectSourceExternalInputValueByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomSelectSourceExternalInputValueByIndex
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} index
	 * @returns {MR_HostControlRoomSelectTargetMonitorValueByIndex}
	 */
	getSelectTargetMonitorValueByIndex (/** @type {number} */index)
	{
		return new MR_HostControlRoomSelectTargetMonitorValueByIndex
	}
	
	/**
	 * @returns {number}
	 */
	getMaxTalkbackChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxExternalInputChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxCueChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxPhonesChannels ()
	{
		
	}
	
	/**
	 * @returns {number}
	 */
	getMaxMonitorChannels ()
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MixConsole
 * @augments MR_HostObject
 */
class MR_MixConsole extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_MixerBankZone}
	 */
	makeMixerBankZone (/** @type {string} */name = '')
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}


/**
 * @class MR_TransportValues
 * @augments MR_HostObject
 */
class MR_TransportValues extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mStart = new MR_StartValue
		/**
		 * @property
		 */
		this.mStop = new MR_StopValue
		/**
		 * @property
		 */
		this.mRecord = new MR_RecordValue
		/**
		 * @property
		 */
		this.mRewind = new MR_RewindValue
		/**
		 * @property
		 */
		this.mForward = new MR_ForwardValue
		/**
		 * @property
		 */
		this.mCycleActive = new MR_CycleActiveValue
		/**
		 * @property
		 */
		this.mMetronomeActive = new MR_MetronomeActiveValue
		/**
		 * @property
		 */
		this.mMetronomeClickLevel = new MR_MetronomeClickLevel
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilter
 * @augments MR_HostObject
 */
class MR_PreFilter extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mBypass = new MR_PreFilterBypassValue
		/**
		 * @property
		 */
		this.mGain = new MR_PreFilterGainValue
		/**
		 * @property
		 */
		this.mPhaseSwitch = new MR_PreFilterPhaseSwitchValue
		/**
		 * @property
		 */
		this.mHighCutOn = new MR_PreFilterHighCutOnValue
		/**
		 * @property
		 */
		this.mHighCutFreq = new MR_PreFilterHighCutFrequencyValue
		/**
		 * @property
		 */
		this.mHighCutSlope = new MR_PreFilterHighCutSlopeValue
		/**
		 * @property
		 */
		this.mLowCutOn = new MR_PreFilterLowCutOnValue
		/**
		 * @property
		 */
		this.mLowCutFreq = new MR_PreFilterLowCutFrequencyValue
		/**
		 * @property
		 */
		this.mLowCutSlope = new MR_PreFilterLowCutSlopeValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ChannelEQBand
 * @augments MR_HostObject
 */
class MR_ChannelEQBand extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mGain = new MR_EQBandGainValue
		/**
		 * @property
		 */
		this.mFreq = new MR_EQBandFrequencyValue
		/**
		 * @property
		 */
		this.mQ = new MR_EQBandQualityValue
		/**
		 * @property
		 */
		this.mOn = new MR_EQBandOnValue
		/**
		 * @property
		 */
		this.mFilterType = new MR_EQBandFilterTypeValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ChannelEQ
 * @augments MR_HostObject
 */
class MR_ChannelEQ extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mBand1 = new MR_ChannelEQBand
		/**
		 * @property
		 */
		this.mBand2 = new MR_ChannelEQBand
		/**
		 * @property
		 */
		this.mBand3 = new MR_ChannelEQBand
		/**
		 * @property
		 */
		this.mBand4 = new MR_ChannelEQBand
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostInstrumentPluginSlot
 * @augments MR_HostObject
 */
class MR_HostInstrumentPluginSlot extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotGate
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotGate extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotCompressor
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotCompressor extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotLimiter
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotLimiter extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotSaturator
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotSaturator extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostStripEffectSlotTools
 * @augments MR_HostObject
 */
class MR_HostStripEffectSlotTools extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostInsertEffectViewer
 * @augments MR_HostObject
 */
class MR_HostInsertEffectViewer extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mAction = new MR_HostInsertEffectViewerActions
		/**
		 * @property
		 */
		this.mOn = new MR_PluginOnValue
		/**
		 * @property
		 */
		this.mBypass = new MR_PluginBypassValue
		/**
		 * @property
		 */
		this.mEdit = new MR_PluginEditValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mParameterBankZone = new MR_HostPluginParameterBankZone
		/**
		 * @property
		 */
		this.mOnChangePluginIdentity = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */pluginName, /** @type {string} */pluginVendor, /** @type {string} */pluginVersion, /** @type {string} */formatVersion) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @returns {MR_HostInsertEffectViewer}
	 */
	includeEmptySlotsOnly ()
	{
		return new MR_HostInsertEffectViewer
	}
	
	/**
	 * @returns {MR_HostInsertEffectViewer}
	 */
	excludeEmptySlots ()
	{
		return new MR_HostInsertEffectViewer
	}
	
	/**
	 * @returns {MR_HostInsertEffectViewer}
	 */
	followPluginWindowInFocus ()
	{
		return new MR_HostInsertEffectViewer
	}
	
	/**
	 * @param {number} index
	 * @returns {MR_HostInsertEffectViewer}
	 */
	accessSlotAtIndex (/** @type {number} */index)
	{
		return new MR_HostInsertEffectViewer
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostInsertAndStripEffects
 * @augments MR_HostObject
 */
class MR_HostInsertAndStripEffects extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mStripEffects = new MR_HostStripEffectSlotFolder
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_HostInsertEffectViewer}
	 */
	makeInsertEffectViewer (/** @type {string} */name)
	{
		return new MR_HostInsertEffectViewer
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SendSlot
 * @augments MR_HostObject
 */
class MR_SendSlot extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_SendOn
		/**
		 * @property
		 */
		this.mPrePost = new MR_SendPrePost
		/**
		 * @property
		 */
		this.mLevel = new MR_SendLevel
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendSlot
 * @augments MR_HostObject
 */
class MR_ControlRoomCueSendSlot extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOn = new MR_ControlRoomCueSendOnValue
		/**
		 * @property
		 */
		this.mPrePost = new MR_ControlRoomCueSendPrePostValue
		/**
		 * @property
		 */
		this.mLevel = new MR_ControlRoomCueSendLevelValue
		/**
		 * @property
		 */
		this.mPan = new MR_ControlRoomCueSendPanValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MixerChannelValues
 * @augments MR_HostObject
 */
class MR_MixerChannelValues extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mVolume = new MR_VolumeValue
		/**
		 * @property
		 */
		this.mPan = new MR_PanValue
		/**
		 * @property
		 */
		this.mMute = new MR_MuteValue
		/**
		 * @property
		 */
		this.mSolo = new MR_SoloValue
		/**
		 * @property
		 */
		this.mMonitorEnable = new MR_MonitorEnableValue
		/**
		 * @property
		 */
		this.mRecordEnable = new MR_RecordEnableValue
		/**
		 * @property
		 */
		this.mEditorOpen = new MR_EditorOpenValue
		/**
		 * @property
		 */
		this.mInstrumentOpen = new MR_InstrumentOpenValue
		/**
		 * @property
		 */
		this.mSelected = new MR_SelectedValue
		/**
		 * @property
		 */
		this.mAutomationRead = new MR_AutomationReadValue
		/**
		 * @property
		 */
		this.mAutomationWrite = new MR_AutomationWriteValue
		/**
		 * @property
		 */
		this.mVUMeter = new MR_VUMeterValue
		/**
		 * @property
		 */
		this.mVUMeterMax = new MR_VUMeterMaxValue
		/**
		 * @property
		 */
		this.mVUMeterClip = new MR_VUMeterClipValue
		/**
		 * @property
		 */
		this.mVUMeterPeak = new MR_VUMeterPeakValue
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} channelIndex
	 * @returns {MR_VUMultiChannelMeterValue}
	 */
	getVUChannelMeterByChannelIndex (/** @type {number} */channelIndex)
	{
		return new MR_VUMultiChannelMeterValue
	}
	
	/**
	 * Represents a continuous value state of a [HostObject](#hostobject).
	 * @param {number} channelIndex
	 * @returns {MR_VUMultiChannelMeterMaxValue}
	 */
	getVUMeterMaxByChannelIndex (/** @type {number} */channelIndex)
	{
		return new MR_VUMultiChannelMeterMaxValue
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MixerBankZone
 * @augments MR_HostObject
 */
class MR_MixerBankZone extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mAction = new MR_MixerBankZoneActions
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeAudioChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeInstrumentChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeSamplerChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeMIDIChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeFXChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeGroupChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeVCAChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeInputChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeOutputChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeWindowZoneMainChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeWindowZoneLeftChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	includeWindowZoneRightChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeAudioChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeInstrumentChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeSamplerChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeMIDIChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeFXChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeGroupChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeVCAChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeInputChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeOutputChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeWindowZoneMainChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeWindowZoneLeftChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @returns {MR_MixerBankZone}
	 */
	excludeWindowZoneRightChannels ()
	{
		return new MR_MixerBankZone
	}
	
	/**
	 * @param {boolean} followVisibility
	 * @returns {MR_MixerBankZone}
	 */
	setFollowVisibility (/** @type {boolean} */followVisibility)
	{
		return this
	}
	
	/**
	 * @returns {MR_MixerBankChannel}
	 */
	makeMixerBankChannel ()
	{
		return new MR_MixerBankChannel
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_TrackSelection
 * @augments MR_HostObject
 */
class MR_TrackSelection extends MR_HostObject {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mMixerChannel = new MR_SelectedTrackChannel
		/**
		 * @property
		 */
		this.mAction = new MR_TrackSelectionActions
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */title) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getRuntimeID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @callback HostObjectOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} title
 */

/**
 * @callback HostObjectOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */

/**
 * @class MR_HostObjectDirectAccess
 */
class MR_HostObjectDirectAccess {
	constructor() {
		/**
		 * @property
		 */
		this.mOnParameterChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag) { }
		/**
		 * @property
		 */
		this.mOnObjectChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID) { }
		/**
		 * @property
		 */
		this.mOnObjectWillBeRemoved = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID) { }
		/**
		 * @property
		 */
		this.mPluginManager = new MR_HostObjectDirectAccessPluginManager
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	activate (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	update (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	deactivate (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {number}
	 */
	getBaseObjectID (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} parentObjectID
	 * @returns {number}
	 */
	getNumberOfChildObjects (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */parentObjectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} parentObjectID
	 * @param {number} childIndex
	 * @returns {number}
	 */
	getChildObjectID (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */parentObjectID, /** @type {number} */childIndex)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {string}
	 */
	getObjectUniqueName (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {string}
	 */
	getObjectTypeName (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {string}
	 */
	getObjectUniqueIDString (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {string}
	 */
	getObjectTitle (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {Array.<number>}
	 */
	getObjectColor (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {number}
	 */
	getNumberOfParameters (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterIndex
	 * @returns {number}
	 */
	getParameterTagByIndex (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterIndex)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {number} maxLength
	 * @returns {string}
	 */
	getParameterTitle (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {number} */maxLength)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {boolean}
	 */
	getParameterEditLockState (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {boolean} state
	 */
	setParameterEditLockState (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {boolean} */state)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {number}
	 */
	getParameterProcessValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {number} value
	 */
	setParameterProcessValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {number} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {number}
	 */
	getParameterDefaultProcessValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {string}
	 */
	getParameterDisplayValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {string} value
	 */
	setParameterDisplayValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {string} */value)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {string}
	 */
	getParameterDefaultDisplayValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {string}
	 */
	getParameterDisplayUnits (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {string}
	 */
	getParameterProcessValueType (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @returns {boolean}
	 */
	isParameterAutomatable (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {number} valueNormalized
	 * @returns {number}
	 */
	convertParameterProcessValueToPlain (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {number} */valueNormalized)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @param {number} parameterTag
	 * @param {number} valuePlain
	 * @returns {number}
	 */
	convertParameterPlainToProcessValue (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID, /** @type {number} */parameterTag, /** @type {number} */valuePlain)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {boolean}
	 */
	isMixerChannelVisible (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {number}
	 */
	getMixerChannelIndex (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} objectID
	 * @returns {number}
	 */
	getMixerChannelZone (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */objectID)
	{
		
	}
}

/**
 * @callback HostObjectDirectAccessOnParameterChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} objectID
 * @param {number} parameterTag
 */

/**
 * @callback HostObjectDirectAccessOnObjectChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} objectID
 */

/**
 * @callback HostObjectDirectAccessOnObjectWillBeRemoved
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} objectID
 */

/**
 * @typedef MR_HostObjectDirectAccessPluginEntry
 * @type {object}
 * @property {string} mPluginName
 * @property {string} mPluginVendor
 * @property {string} mPluginVersion
 * @property {string} mFormatVersion
 * @property {string} mSubCategories
 * @property {string} mPluginUID
 * @property {string} mCollectionPath
 */

/**
 * @typedef MR_HostObjectDirectAccessPluginCollection
 * @type {object}
 * @property {string} mName
 * @property {Array.<MR_HostObjectDirectAccessPluginEntry>} mEntries
 */

/**
 * @class MR_HostObjectDirectAccessPluginManager
 */
class MR_HostObjectDirectAccessPluginManager {
	constructor() {
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 * @returns {number}
	 */
	getNumberOfPluginCollections (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 * @param {number} index
	 * @returns {MR_HostObjectDirectAccessPluginCollection}
	 */
	getPluginCollectionByIndex (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID, /** @type {number} */index)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 * @returns {number}
	 */
	getIndexOfDefaultPluginCollection (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 * @returns {number}
	 */
	getIndexOfActivePluginCollection (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 * @param {string} pluginTypeUID
	 * @param {boolean} dontAskDiscard
	 * @returns {boolean}
	 */
	trySetSlotPlugin (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID, /** @type {string} */pluginTypeUID, /** @type {boolean} */dontAskDiscard)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} pluginSlotObjectID
	 */
	resetSlotPlugin (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */pluginSlotObjectID)
	{
		
	}
}

/**
 * @class MR_HostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 */
class MR_HostValue {
	constructor() {
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostValueUndefined
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostValueUndefined extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_StartValue
 * Indicates if transport has been started.
 * @augments MR_HostValue
 */
class MR_StartValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_StopValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_StopValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_RecordValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RecordValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_RewindValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RewindValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ForwardValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ForwardValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_CycleActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_CycleActiveValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MetronomeActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MetronomeActiveValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MetronomeClickLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MetronomeClickLevel extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VolumeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VolumeValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PanValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MuteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MuteValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SoloValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SoloValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_MonitorEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_MonitorEnableValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_RecordEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_RecordEnableValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EditorOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EditorOpenValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_InstrumentOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_InstrumentOpenValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SelectedValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SelectedValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_AutomationReadValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_AutomationReadValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_AutomationWriteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_AutomationWriteValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMeterValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMeterMaxValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterMaxValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMeterClipValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterClipValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMeterPeakValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMeterPeakValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMultiChannelMeterValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMultiChannelMeterValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_VUMultiChannelMeterMaxValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_VUMultiChannelMeterMaxValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SendOn
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendOn extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SendPrePost
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendPrePost extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_SendLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_SendLevel extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendOnValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendPrePostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendPrePostValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendLevelValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendLevelValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendPanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendPanValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ControlRoomCueSendFolderBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_ControlRoomCueSendFolderBypassValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PluginOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginOnValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PluginBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginBypassValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PluginEditValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PluginEditValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterBypassValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterGainValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterPhaseSwitchValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterPhaseSwitchValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterHighCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutFrequencyValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterHighCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutOnValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterHighCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterHighCutSlopeValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterLowCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutFrequencyValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterLowCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutOnValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_PreFilterLowCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_PreFilterLowCutSlopeValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EQBandGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandGainValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EQBandFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandFrequencyValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EQBandQualityValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandQualityValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EQBandOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandOnValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_EQBandFilterTypeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_EQBandFilterTypeValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_QuickControlValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_QuickControlValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_FocusedQuickControlsLockedStateValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_FocusedQuickControlsLockedStateValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostPluginParameterBankValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostPluginParameterBankValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostValueAtMouseCursor
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostValueAtMouseCursor extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostValueAtMouseCursorLockedState
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostValueAtMouseCursorLockedState extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomValue extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomSelectSourceCueValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectSourceCueValueByIndex extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomSelectTargetMonitorValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectTargetMonitorValueByIndex extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_HostControlRoomSelectSourceExternalInputValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
class MR_HostControlRoomSelectSourceExternalInputValueByIndex extends MR_HostValue {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnProcessValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */value) { }
		/**
		 * @property
		 */
		this.mOnDisplayValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */value, /** @type {string} */units) { }
		/**
		 * @property
		 */
		this.mOnTitleChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */objectTitle, /** @type {string} */valueTitle) { }
		/**
		 * @property
		 */
		this.mOnColorChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */r, /** @type {number} */g, /** @type {number} */b, /** @type {number} */a, /** @type {boolean} */isActive) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	increment (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 */
	decrement (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @callback HostValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} value
 */

/**
 * @callback HostValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} value
 * @param {string} units
 */

/**
 * @callback HostValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} objectTitle
 * @param {string} valueTitle
 */

/**
 * @callback HostValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */



/**
 * @callback OnChangeTransportTime
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} time
 * @param {string} format
 */

/**
 * @callback OnChangeTransportTempoBPM
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} tempoBPM
 */

/**
 * @class MR_TransportTimeDisplayDetails
 */
class MR_TransportTimeDisplayDetails {
	constructor() {
		
	}
	
}

/**
 * @class MR_TransportTimeDisplayDetailsPrimary
 * @augments MR_TransportTimeDisplayDetails
 */
class MR_TransportTimeDisplayDetailsPrimary extends MR_TransportTimeDisplayDetails {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mCycleLocatorLeft = new MR_TransportTime
		/**
		 * @property
		 */
		this.mCycleLocatorRight = new MR_TransportTime
		/**
		 * @property
		 */
		this.mTransportLocator = new MR_TransportTime
	}
	
}

/**
 * @class MR_TransportTimeDisplayDetailsSecondary
 * @augments MR_TransportTimeDisplayDetails
 */
class MR_TransportTimeDisplayDetailsSecondary extends MR_TransportTimeDisplayDetails {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mCycleLocatorLeft = new MR_TransportTime
		/**
		 * @property
		 */
		this.mCycleLocatorRight = new MR_TransportTime
		/**
		 * @property
		 */
		this.mTransportLocator = new MR_TransportTime
	}
	
}

/**
 * @class MR_TransportTimeDisplay
 */
class MR_TransportTimeDisplay {
	constructor() {
		/**
		 * @property
		 */
		this.mPrimary = new MR_TransportTimeDisplayDetailsPrimary
		/**
		 * @property
		 */
		this.mSecondary = new MR_TransportTimeDisplayDetailsSecondary
		/**
		 * @property
		 */
		this.mOnChangeTempoBPM = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */tempoBPM) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {number} tempoBPM
	 */
	setTempoBPM (/** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */tempoBPM)
	{
		
	}
}

/**
 * @class MR_TransportTime
 */
class MR_TransportTime {
	constructor() {
		/**
		 * @property
		 */
		this.mOnChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */time, /** @type {string} */format) { }
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @param {string} timeString
	 */
	setTime (/** @type {MR_ActiveMapping} */activeMapping, /** @type {string} */timeString)
	{
		
	}
}

/**
 * @class MR_HostPluginParameterBankZoneActions
 */
class MR_HostPluginParameterBankZoneActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrevBank = new MR_HostPluginParameterBankZoneAction
		/**
		 * @property
		 */
		this.mNextBank = new MR_HostPluginParameterBankZoneAction
		/**
		 * @property
		 */
		this.mResetBank = new MR_HostPluginParameterBankZoneAction
	}
	
}

/**
 * @callback HostPluginSlotOnChangePluginIdentity
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} pluginName
 * @param {string} pluginVendor
 * @param {string} pluginVersion
 * @param {string} formatVersion
 */


/**
 * @class MR_HostInsertEffectFilter
 */
class MR_HostInsertEffectFilter {
	constructor() {
	}
	
}

/**
 * @class MR_HostInsertEffectFilterIncludeEmptySlotsOnly
 * @augments MR_HostInsertEffectFilter
 */
class MR_HostInsertEffectFilterIncludeEmptySlotsOnly extends MR_HostInsertEffectFilter {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostInsertEffectFilterExcludeEmptySlots
 * @augments MR_HostInsertEffectFilter
 */
class MR_HostInsertEffectFilterExcludeEmptySlots extends MR_HostInsertEffectFilter {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostInsertEffectFilterFollowPluginWindowInFocus
 * @augments MR_HostInsertEffectFilter
 */
class MR_HostInsertEffectFilterFollowPluginWindowInFocus extends MR_HostInsertEffectFilter {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostInsertEffectFilterAccessSlotAtIndex
 * @augments MR_HostInsertEffectFilter
 */
class MR_HostInsertEffectFilterAccessSlotAtIndex extends MR_HostInsertEffectFilter {
	constructor() {
		super()
	}
	
}

/**
 * @class MR_HostInsertEffectViewerActions
 */
class MR_HostInsertEffectViewerActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrev = new MR_HostInsertEffectViewerAction
		/**
		 * @property
		 */
		this.mNext = new MR_HostInsertEffectViewerAction
		/**
		 * @property
		 */
		this.mReset = new MR_HostInsertEffectViewerAction
	}
	
}


/**
 * @class MR_MixerBankZoneActions
 */
class MR_MixerBankZoneActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrevBank = new MR_MixerBankZoneAction
		/**
		 * @property
		 */
		this.mNextBank = new MR_MixerBankZoneAction
		/**
		 * @property
		 */
		this.mShiftLeft = new MR_MixerBankZoneAction
		/**
		 * @property
		 */
		this.mShiftRight = new MR_MixerBankZoneAction
		/**
		 * @property
		 */
		this.mResetBank = new MR_MixerBankZoneAction
	}
	
}

/**
 * @class MR_TrackSelectionActions
 */
class MR_TrackSelectionActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrevTrack = new MR_TrackSelectionAction
		/**
		 * @property
		 */
		this.mNextTrack = new MR_TrackSelectionAction
	}
	
}

/**
 * @class MR_HostBinding
 */
class MR_HostBinding {
	constructor() {
		
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_HostBinding}
	 */
	setSubPage (/** @type {MR_SubPage} */subPage)
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_HostBinding}
	 */
	filterByValue (/** @type {number} */filterValue)
	{
		return null
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_HostBinding}
	 */
	filterByValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return null
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_HostBinding}
	 */
	mapToValue (/** @type {number} */mapValue)
	{
		return null
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_HostBinding}
	 */
	mapToValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return null
	}
}

/**
 * @class MR_ValueBinding
 * @augments MR_HostBinding
 */
class MR_ValueBinding extends MR_HostBinding {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */currValue, /** @type {number} */valueDiff) { }
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setTypeDefault ()
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setTypeToggle ()
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModeJump ()
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModePickup ()
	{
		return this
	}
	
	/**
	 * @returns {MR_ValueBinding}
	 */
	setValueTakeOverModeScaled ()
	{
		return this
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_ValueBinding}
	 */
	setSubPage (/** @type {MR_SubPage} */subPage)
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_ValueBinding}
	 */
	filterByValue (/** @type {number} */filterValue)
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ValueBinding}
	 */
	filterByValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_ValueBinding}
	 */
	mapToValue (/** @type {number} */mapValue)
	{
		return new MR_ValueBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ValueBinding}
	 */
	mapToValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_ValueBinding
	}
}

/**
 * @class MR_CommandBinding
 * @augments MR_HostBinding
 */
class MR_CommandBinding extends MR_HostBinding {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */currValue, /** @type {number} */valueDiff) { }
	}
	
	/**
	 * @param {number} delaySeconds
	 * @param {number} rateHz
	 * @returns {MR_Repeating}
	 */
	makeRepeating (/** @type {number} */delaySeconds, /** @type {number} */rateHz)
	{
		return new MR_Repeating
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_CommandBinding}
	 */
	setSubPage (/** @type {MR_SubPage} */subPage)
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_CommandBinding}
	 */
	filterByValue (/** @type {number} */filterValue)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_CommandBinding}
	 */
	filterByValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_CommandBinding}
	 */
	mapToValue (/** @type {number} */mapValue)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_CommandBinding}
	 */
	mapToValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_CommandBinding
	}
	
	/**
	 * @param {MR_ActiveMapping} activeMapping
	 * @returns {boolean}
	 */
	canPerform (/** @type {MR_ActiveMapping} */activeMapping)
	{
		
	}
}

/**
 * @class MR_ActionBinding
 * @augments MR_HostBinding
 */
class MR_ActionBinding extends MR_HostBinding {
	constructor() {
		super()
		/**
		 * @property
		 */
		this.mOnValueChange = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping, /** @type {number} */currValue, /** @type {number} */valueDiff) { }
	}
	
	/**
	 * @param {number} delaySeconds
	 * @param {number} rateHz
	 * @returns {MR_Repeating}
	 */
	makeRepeating (/** @type {number} */delaySeconds, /** @type {number} */rateHz)
	{
		return new MR_Repeating
	}
	
	/**
	 * @param {MR_SubPage} subPage
	 * @returns {MR_ActionBinding}
	 */
	setSubPage (/** @type {MR_SubPage} */subPage)
	{
		return this
	}
	
	/**
	 * @param {number} filterValue
	 * @returns {MR_ActionBinding}
	 */
	filterByValue (/** @type {number} */filterValue)
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ActionBinding}
	 */
	filterByValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} mapValue
	 * @returns {MR_ActionBinding}
	 */
	mapToValue (/** @type {number} */mapValue)
	{
		return new MR_ActionBinding
	}
	
	/**
	 * @param {number} from
	 * @param {number} to
	 * @returns {MR_ActionBinding}
	 */
	mapToValueRange (/** @type {number} */from, /** @type {number} */to)
	{
		return new MR_ActionBinding
	}
}

/**
 * @callback HostBindingOnValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} currValue
 * @param {number} valueDiff
 */

/**
 * @class MR_SubPageArea
 */
class MR_SubPageArea {
	constructor() {
		/**
		 * @property
		 */
		this.mAction = new MR_SubPageAreaActions
	}
	
	/**
	 * @param {string} name
	 * @returns {MR_SubPage}
	 */
	makeSubPage (/** @type {string} */name)
	{
		return new MR_SubPage
	}
}

/**
 * @class MR_SubPageAreaActions
 */
class MR_SubPageAreaActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrev = new MR_SubPageAreaAction
		/**
		 * @property
		 */
		this.mNext = new MR_SubPageAreaAction
		/**
		 * @property
		 */
		this.mReset = new MR_SubPageAreaAction
	}
	
}

/**
 * @class MR_SubPage
 */
class MR_SubPage {
	constructor() {
		/**
		 * @property
		 */
		this.mAction = new MR_SubPageActions
		/**
		 * @property
		 */
		this.mOnActivate = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping) { }
		/**
		 * @property
		 */
		this.mOnDeactivate = function (/** @type {MR_ActiveDevice} */activeDevice, /** @type {MR_ActiveMapping} */activeMapping) { }
	}
	
}

/**
 * @class MR_SubPageActions
 */
class MR_SubPageActions {
	constructor() {
		/**
		 * @property
		 */
		this.mActivate = new MR_SubPageActionActivate
	}
	
}


/**
 * @class MR_Repeating
 */
class MR_Repeating {
	constructor() {
	}
	
}

/**
 * @class MR_MappingPageActions
 */
class MR_MappingPageActions {
	constructor() {
		/**
		 * @property
		 */
		this.mActivate = new MR_MappingPageActionActivate
	}
	
}


/**
 * @class MR_DeviceDetectionUnit
 * Define device auto detection.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *     
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
 *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
 * 
 */
class MR_DeviceDetectionUnit {
	constructor() {
		/**
		 * @property
		 */
		this.mPlatformFilter = new MR_DetectionUnitPlatformFilter
	}
	
	/**
	 * Define port naming pair.
	 * @example
	 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
	 *     .expectInputNameEquals('SimpleDevice IN')
	 *     .expectOutputNameEquals('SimpleDevice OUT')
	 *     
	 * @param {MR_DeviceMidiInput} inputPort
	 * @param {MR_DeviceMidiOutput} outputPort
	 * @returns {MR_DetectionPortPair}
	 */
	detectPortPair (/** @type {MR_DeviceMidiInput} */inputPort, /** @type {MR_DeviceMidiOutput} */outputPort)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {MR_DeviceMidiInput} inputPort
	 * @returns {MR_DetectionSingleInput}
	 */
	detectSingleInput (/** @type {MR_DeviceMidiInput} */inputPort)
	{
		return new MR_DetectionSingleInput
	}
}

/**
 * @class MR_DetectionUnitPlatformFilter
 */
class MR_DetectionUnitPlatformFilter {
	constructor() {
	}
	
	/**
	 * @returns {MR_DetectionUnitPlatformFilter}
	 */
	expectPlatformMacOS ()
	{
		return new MR_DetectionUnitPlatformFilter
	}
	
	/**
	 * @returns {MR_DetectionUnitPlatformFilter}
	 */
	expectPlatformNotMacOS ()
	{
		return new MR_DetectionUnitPlatformFilter
	}
	
	/**
	 * @returns {MR_DetectionUnitPlatformFilter}
	 */
	expectPlatformWindows ()
	{
		return new MR_DetectionUnitPlatformFilter
	}
	
	/**
	 * @returns {MR_DetectionUnitPlatformFilter}
	 */
	expectPlatformNotWindows ()
	{
		return new MR_DetectionUnitPlatformFilter
	}
}

/**
 * @class MR_DetectionEntry
 */
class MR_DetectionEntry {
	constructor() {
	}
	
}

/**
 * @class MR_DetectionPortPair
 * Define port naming pair.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *     
 * @augments MR_DetectionEntry
 */
class MR_DetectionPortPair extends MR_DetectionEntry {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameContains (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameEquals (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameStartsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectInputNameEndsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameContains (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameEquals (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameStartsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionPortPair}
	 */
	expectOutputNameEndsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionPortPair
	}
	
	/**
	 * @param {string} manufacturerID
	 * @param {string} deviceFamily
	 * @param {string} modelNumber
	 * @returns {MR_DetectionPortPair}
	 */
	expectSysexIdentityResponse (/** @type {string} */manufacturerID, /** @type {string} */deviceFamily, /** @type {string} */modelNumber)
	{
		return new MR_DetectionPortPair
	}
}

/**
 * @class MR_DetectionSingleInput
 * @augments MR_DetectionEntry
 */
class MR_DetectionSingleInput extends MR_DetectionEntry {
	constructor() {
		super()
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameContains (/** @type {string} */filterValue)
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameEquals (/** @type {string} */filterValue)
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameStartsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionSingleInput
	}
	
	/**
	 * @param {string} filterValue
	 * @returns {MR_DetectionSingleInput}
	 */
	expectInputNameEndsWith (/** @type {string} */filterValue)
	{
		return new MR_DetectionSingleInput
	}
}

/**
 * @class MR_DeviceDriverActions
 */
class MR_DeviceDriverActions {
	constructor() {
		/**
		 * @property
		 */
		this.mPrevPage = new MR_DeviceDriverAction
		/**
		 * @property
		 */
		this.mNextPage = new MR_DeviceDriverAction
		/**
		 * @property
		 */
		this.mResetPage = new MR_DeviceDriverAction
	}
	
}

/**
 * @class MR_InitialSysexFile
 */
class MR_InitialSysexFile {
	constructor() {
	}
	
}

/**
 * @class MR_UserGuide
 */
class MR_UserGuide {
	constructor() {
	}
	
}

/**
 * @typedef __primitive_void
 * @type {undefined}
 */


module.exports = new MR_MidiRemoteAPI
