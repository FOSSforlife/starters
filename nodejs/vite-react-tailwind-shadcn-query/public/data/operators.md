## [Gen Common Operators](https://docs.cycling74.com/max8/vignettes/gen_common_operators)

The following Gen operators are common to all of Max's Gen family of objects. They can be used as operators in the [gen](https://docs.cycling74.com/max8/refpages/gen), [gen~](https://docs.cycling74.com/max8/refpages/gen~) , [jit.gen](https://docs.cycling74.com/max8/refpages/jit.gen) , [jit.pix](https://docs.cycling74.com/max8/refpages/jit.pix) , and [jit.gl.pix](https://docs.cycling74.com/max8/refpages/jit.gl.pix) objects.

### Comparison

- [!=p](https://docs.cycling74.com/max8/refpages/gen_common_neqp), [neqp](https://docs.cycling74.com/max8/refpages/gen_common_neqp) : Returns in1 if it does not equal in2, else returns zero. Equivalent to in1\*(in1 != in2).
- [>](https://docs.cycling74.com/max8/refpages/gen_common_gt), [gt](https://docs.cycling74.com/max8/refpages/gen_common_gt) : Returns 1 if in1 is greater than in2, else returns zero.
- [\==](https://docs.cycling74.com/max8/refpages/gen_common_eq), [eq](https://docs.cycling74.com/max8/refpages/gen_common_eq) : Returns 1 if in1 equals in2, else returns zero.
- [\==p](https://docs.cycling74.com/max8/refpages/gen_common_eqp), [eqp](https://docs.cycling74.com/max8/refpages/gen_common_eqp) : Returns in1 if it equals in2, else returns zero. Equivalent to in1\*(in1 == in2).
- [>=](https://docs.cycling74.com/max8/refpages/gen_common_gte), [gte](https://docs.cycling74.com/max8/refpages/gen_common_gte) : Returns 1 if in1 is equal to or greater than in2, else returns zero.
- [>=p](https://docs.cycling74.com/max8/refpages/gen_common_gtep), [gtep](https://docs.cycling74.com/max8/refpages/gen_common_gtep) : Returns in1 if in1 is equal to or greater than in2, else returns zero. Equivalent to in1\*(in1 >= in2).
- [>p](https://docs.cycling74.com/max8/refpages/gen_common_gtp), [gtp](https://docs.cycling74.com/max8/refpages/gen_common_gtp) : Returns in1 if in1 is greater than in2, else returns zero. Equivalent to in1\*(in1 > in2).
- [<](https://docs.cycling74.com/max8/refpages/gen_common_lt), [lt](https://docs.cycling74.com/max8/refpages/gen_common_lt) : Returns 1 if in1 is less than than in2, else returns zero.
- [<=](https://docs.cycling74.com/max8/refpages/gen_common_lte), [lte](https://docs.cycling74.com/max8/refpages/gen_common_lte) : Returns 1 if in1 is equal to or less than in2, else returns zero.
- [<=p](https://docs.cycling74.com/max8/refpages/gen_common_ltep), [ltep](https://docs.cycling74.com/max8/refpages/gen_common_ltep) : Returns in1 if in1 is equal to or less than in2, else returns zero. Equivalent to in1\*(in1 <= in2).
- [<p](https://docs.cycling74.com/max8/refpages/gen_common_ltp), [ltp](https://docs.cycling74.com/max8/refpages/gen_common_ltp) : Returns in1 if in1 is less than in2, else returns zero. Equivalent to in1\*(in1 < in2).
- [max](https://docs.cycling74.com/max8/refpages/gen_common_max), [maximum](https://docs.cycling74.com/max8/refpages/gen_common_max) : The maximum of the inputs
- [min](https://docs.cycling74.com/max8/refpages/gen_common_min), [minimum](https://docs.cycling74.com/max8/refpages/gen_common_min) : The minimum of the inputs
- [!=](https://docs.cycling74.com/max8/refpages/gen_common_neq), [neq](https://docs.cycling74.com/max8/refpages/gen_common_neq) : Returns 1 if in1 does not equal in2, else returns zero.
- [step](https://docs.cycling74.com/max8/refpages/gen_common_step) : Akin to the GLSL step operator: 0 is returned if in1 < in2, and 1 is returned otherwise.

### Constant

- [constant](https://docs.cycling74.com/max8/refpages/gen_common_constant) : A constant value
- [degtorad](https://docs.cycling74.com/max8/refpages/gen_common_degtorad), [DEGTORAD](https://docs.cycling74.com/max8/refpages/gen_common_degtorad) : A constant value
- [e](https://docs.cycling74.com/max8/refpages/gen_common_e), [E](https://docs.cycling74.com/max8/refpages/gen_common_e) : A constant value
- [f](https://docs.cycling74.com/max8/refpages/gen_common_float), [float](https://docs.cycling74.com/max8/refpages/gen_common_float) : Either outputs a constant float or converts its input value to a float
- [halfpi](https://docs.cycling74.com/max8/refpages/gen_common_halfpi), [HALFPI](https://docs.cycling74.com/max8/refpages/gen_common_float) : A constant value
- [i](https://docs.cycling74.com/max8/refpages/gen_common_int), [int](https://docs.cycling74.com/max8/refpages/gen_common_int) : Either outputs a constant integer or converts its input value to an integer.
- [invpi](https://docs.cycling74.com/max8/refpages/gen_common_invpi), [INVPI](https://docs.cycling74.com/max8/refpages/gen_common_invpi) : A constant value
- [ln10](https://docs.cycling74.com/max8/refpages/gen_common_ln10), [LN10](https://docs.cycling74.com/max8/refpages/gen_common_ln10) : A constant value
- [ln2](https://docs.cycling74.com/max8/refpages/gen_common_ln2), [LN2](https://docs.cycling74.com/max8/refpages/gen_common_ln2) : A constant value
- [log10e](https://docs.cycling74.com/max8/refpages/gen_common_log10e), [LOG10E](https://docs.cycling74.com/max8/refpages/gen_common_log10e) : A constant value
- [log2e](https://docs.cycling74.com/max8/refpages/gen_common_log2e), [LOG2E](https://docs.cycling74.com/max8/refpages/gen_common_log2e) : A constant value
- [PHI](https://docs.cycling74.com/max8/refpages/gen_common_phi), [phi](https://docs.cycling74.com/max8/refpages/gen_common_phi) : A constant value
- [pi](https://docs.cycling74.com/max8/refpages/gen_common_pi), [PI](https://docs.cycling74.com/max8/refpages/gen_common_pi) : A constant value
- [radtodeg](https://docs.cycling74.com/max8/refpages/gen_common_radtodeg), [RADTODEG](https://docs.cycling74.com/max8/refpages/gen_common_radtodeg) : A constant value
- [sqrt1_2](https://docs.cycling74.com/max8/refpages/gen_common_sqrt1_2), [SQRT1_2](https://docs.cycling74.com/max8/refpages/gen_common_sqrt1_2) : A constant value
- [sqrt2](https://docs.cycling74.com/max8/refpages/gen_common_sqrt2), [SQRT2](https://docs.cycling74.com/max8/refpages/gen_common_sqrt2) : A constant value
- [twopi](https://docs.cycling74.com/max8/refpages/gen_common_twopi), [TWOPI](https://docs.cycling74.com/max8/refpages/gen_common_twopi) : A constant value

### Declare

- [param](https://docs.cycling74.com/max8/refpages/gen_common_param), [Param](https://docs.cycling74.com/max8/refpages/gen_common_param) : Named parameters can be modified from outside the gen patcher. The first argument specifies the name of the parameter, the second argument the initial value.

### Expression

- [expr](https://docs.cycling74.com/max8/refpages/gen_common_expr) : Evaluates GenExpr code. Standard mathematical operators (+, -, \*, / etc.) and gen patcher operators can be used. See the GenExpr documentation for more detail.

### Ignore

- [pass](https://docs.cycling74.com/max8/refpages/gen_common_pass) : Passes the value through unchanged.

### Input-output

- [in](https://docs.cycling74.com/max8/refpages/gen_common_in) : Defines an input for a gen patcher.
- [out](https://docs.cycling74.com/max8/refpages/gen_common_out) : Send output from a gen patcher

### Logic

- [!](https://docs.cycling74.com/max8/refpages/gen_common_not), [not](https://docs.cycling74.com/max8/refpages/gen_common_not) : An input value of zero returns 1, any other value returns zero.
- [&&](https://docs.cycling74.com/max8/refpages/gen_common_and), [and](https://docs.cycling74.com/max8/refpages/gen_common_and) : Returns 1 if both in1 and in2 are nonzero.
- [bool](https://docs.cycling74.com/max8/refpages/gen_common_bool) : Converts any nonzero value to 1 while zero passes through.
- [or](https://docs.cycling74.com/max8/refpages/gen_common_or), [||](https://docs.cycling74.com/max8/refpages/gen_common_or) : Returns 1 if either in1 or in2 are nonzero.
- [^^](https://docs.cycling74.com/max8/refpages/gen_common_xor), [xor](https://docs.cycling74.com/max8/refpages/gen_common_xor) : Returns 1 if one of in1 and in2 are nonzero, but not both.

### Math

- [!%](https://docs.cycling74.com/max8/refpages/gen_common_rmod), [rmod](https://docs.cycling74.com/max8/refpages/gen_common_rmod) : Reverse modulo (remainder of second input / first input)
- [!-](https://docs.cycling74.com/max8/refpages/gen_common_rsub), [rsub](https://docs.cycling74.com/max8/refpages/gen_common_rsub) : Reverse subtraction (subtract first input from second)
- [%](https://docs.cycling74.com/max8/refpages/gen_common_mod), [mod](https://docs.cycling74.com/max8/refpages/gen_common_mod) : Modulo inputs (remainder of first input / second input)
- [+](https://docs.cycling74.com/max8/refpages/gen_common_add), [add](https://docs.cycling74.com/max8/refpages/gen_common_add) : Add inputs
- [-](https://docs.cycling74.com/max8/refpages/gen_common_sub), [sub](https://docs.cycling74.com/max8/refpages/gen_common_sub) : Subtract inputs
- [/](https://docs.cycling74.com/max8/refpages/gen_common_div), [div](https://docs.cycling74.com/max8/refpages/gen_common_div) : Divide inputs
- [absdiff](https://docs.cycling74.com/max8/refpages/gen_common_absdiff) : Compute the absolute difference between two inputs using the equation abs(in1-in2).
- [cartopol](https://docs.cycling74.com/max8/refpages/gen_common_cartopol) : Convert Cartesian values to polar format. Angles are in radians.
- [\*](https://docs.cycling74.com/max8/refpages/gen_common_mul), [mul](https://docs.cycling74.com/max8/refpages/gen_common_mul) : Multiply inputs
- [neg](https://docs.cycling74.com/max8/refpages/gen_common_neg) : Negate input
- [poltocar](https://docs.cycling74.com/max8/refpages/gen_common_poltocar) : Convert polar values to Cartesian format. Angles are in radians.
- [!/](https://docs.cycling74.com/max8/refpages/gen_common_rdiv), [rdiv](https://docs.cycling74.com/max8/refpages/gen_common_rdiv) : Reverse division (divide second input by first)

### Numeric

- [abs](https://docs.cycling74.com/max8/refpages/gen_common_abs) : Negative values will be converted to positive counterparts.
- [ceil](https://docs.cycling74.com/max8/refpages/gen_common_ceil) : Round the value up to the next higher integer
- [floor](https://docs.cycling74.com/max8/refpages/gen_common_floor), [trunc](https://docs.cycling74.com/max8/refpages/gen_common_trunc) : Round the value down to the next lower integer (toward negative infinity)
- [fract](https://docs.cycling74.com/max8/refpages/gen_common_fract) : Return only the fractional component
- [sign](https://docs.cycling74.com/max8/refpages/gen_common_sign) : Positive input returns 1, negative input returns -1, zero returns itself.
- [trunc](https://docs.cycling74.com/max8/refpages/gen_common_trunc) : Round the value down to the next smaller integer (toward zero)

### Powers

- [exp](https://docs.cycling74.com/max8/refpages/gen_common_exp) : Raise the mathematical value e to a power
- [exp2](https://docs.cycling74.com/max8/refpages/gen_common_exp2) : Raise 2 to a power
- [fastexp](https://docs.cycling74.com/max8/refpages/gen_common_fastexp) : Approximated e to a power
- [fastpow](https://docs.cycling74.com/max8/refpages/gen_common_fastpow) : Approximated in1 to the power of in2
- [ln](https://docs.cycling74.com/max8/refpages/gen_common_ln), [log](https://docs.cycling74.com/max8/refpages/gen_common_log) : The natural logarithm
- [log10](https://docs.cycling74.com/max8/refpages/gen_common_log10) : The logarithm base 10 of the input
- [log2](https://docs.cycling74.com/max8/refpages/gen_common_log2) : The logarithm base 2 of the input
- [pow](https://docs.cycling74.com/max8/refpages/gen_common_pow) : Raise in1 to the power of in2
- [sqrt](https://docs.cycling74.com/max8/refpages/gen_common_sqrt) : The square root of the input

### Range

- [clamp](https://docs.cycling74.com/max8/refpages/gen_common_clamp), [clip](https://docs.cycling74.com/max8/refpages/gen_common_clip) : Clamps the input value between specified min and max. Ranges are inclusive (both min and max values may be output)
- [fold](https://docs.cycling74.com/max8/refpages/gen_common_fold) : Low and high values can be specified by arguments or by inlets. The default range is 0..1.
- [scale](https://docs.cycling74.com/max8/refpages/gen_common_scale) : Similar to the Max scale and MSP scale~ objects. Inputs are: 1) value to scale, 2) input lower bound, 3), input upper bound, 4) output lower bound, 5) output upper bound, 6) exponential curve. Default lower and upper bounds are zero and one; default exponential curve is 1 (linear). No bound clamping is performed. The high and low values can be reversed for inverted mapping.
- [wrap](https://docs.cycling74.com/max8/refpages/gen_common_wrap) : Low and high values can be specified by arguments or by inlets. The default range is 0..1.

### Route

- [?](https://docs.cycling74.com/max8/refpages/gen_common_switch), [switch](https://docs.cycling74.com/max8/refpages/gen_common_switch) : Selects between the second and third inputs according to the boolean value of the first. If the first argument is true, the second argument will be output. Otherwise, the third argument will be output.
- [gate](https://docs.cycling74.com/max8/refpages/gen_common_gate) : Similar to the MSP gate~ object. It takes an argument for number of outputs (one is the default) and lets you choose which the incoming signal (at the right inlet) is sent to according to the (integer) value in the left inlet. A value of zero or less to the left inlet will choose no output; a value greater than the number of outlets will select the last outlet. Like gate~, un-selected outlets will send zero.
- [mix](https://docs.cycling74.com/max8/refpages/gen_common_mix) : Mixes (interpolates) between inputs a and b according to the value of the third input t, using linear interpolation. The factor (t) should vary between 0 (for a) and 1 (for b). If one argument is given, it specifies the mix (interpolation) factor.
- [r](https://docs.cycling74.com/max8/refpages/gen_common_receive), [receive](https://docs.cycling74.com/max8/refpages/gen_common_receive) : Receive values from a named send. The send/receive pairs are only visible to each other within the same gen patcher. They will not send across gen patchers or sub-patchers.
- [s](https://docs.cycling74.com/max8/refpages/gen_common_send), [send](https://docs.cycling74.com/max8/refpages/gen_common_send) : Send values to a named receive. The send/receive pairs are only visible to each other within the same gen patcher. They will not send across gen patchers or sub-patchers.
- [selector](https://docs.cycling74.com/max8/refpages/gen_common_selector) : Similar to the MSP selector~ object. In a Gen patcher it takes an argument for number of choices (one is the default). In GenExpr, the number of choices is determined by the number of arguments. The first input lets you choose which of the remaining inputs is sent to the output. A value of zero or less to the first input will result in a zero signal at the output; a value greater than the number of choices will select the last input.
- [smoothstep](https://docs.cycling74.com/max8/refpages/gen_common_smoothstep) : Smoothstep is a scalar interpolation function commonly used in computer graphics. The function interpolates smoothly between two input values based on a third one that should be between the first two. The returned value is clamped between 0 and 1. The slope (i.e. derivative) of the smoothstep function starts at 0 and ends at 0.

### Subpatcher

- [gen](https://docs.cycling74.com/max8/refpages/gen_common_gen) : Gen subpatcher or abstraction
- [setparam](https://docs.cycling74.com/max8/refpages/gen_common_setparam) : Set a param in a subpatcher from a parent patcher

### Trigonometry

- [acos](https://docs.cycling74.com/max8/refpages/gen_common_acos) : The arc cosine of the input (returns radians)
- [acosh](https://docs.cycling74.com/max8/refpages/gen_common_acosh) : The inverse hyperbolic cosine of the input
- [asin](https://docs.cycling74.com/max8/refpages/gen_common_asin) : The arc sine of the input (returns radians)
- [asinh](https://docs.cycling74.com/max8/refpages/gen_common_asinh) : The inverse hyperbolic sine of the input
- [atan](https://docs.cycling74.com/max8/refpages/gen_common_atan) : The arc tangent of the input (returns radians)
- [atan2](https://docs.cycling74.com/max8/refpages/gen_common_atan2) : Returns the angle to the coordinate (x,y) in radians.
- [atanh](https://docs.cycling74.com/max8/refpages/gen_common_atanh) : The inverse hyperbolic tangent of the input
- [cos](https://docs.cycling74.com/max8/refpages/gen_common_cos) : The cosine of the input (in radians)
- [cosh](https://docs.cycling74.com/max8/refpages/gen_common_cosh) : The hyperbolic cosine of the input
- [degrees](https://docs.cycling74.com/max8/refpages/gen_common_degrees) : convert radians to degrees
- [fastcos](https://docs.cycling74.com/max8/refpages/gen_common_fastcos) : The approximated cosine of the input (in radians)
- [fastsin](https://docs.cycling74.com/max8/refpages/gen_common_fastsin) : The approximated sine of the input (in radians)
- [fasttan](https://docs.cycling74.com/max8/refpages/gen_common_fasttan) : The approximated tangent of the input (in radians)
- [hypot](https://docs.cycling74.com/max8/refpages/gen_common_hypot) : Returns the length of the vector to (in1, in2).
- [radians](https://docs.cycling74.com/max8/refpages/gen_common_radians) : convert degrees to radians
- [sin](https://docs.cycling74.com/max8/refpages/gen_common_sin) : The sine of the input (in radians)
- [sinh](https://docs.cycling74.com/max8/refpages/gen_common_sinh) : The hyperbolic sine of the input
- [tan](https://docs.cycling74.com/max8/refpages/gen_common_tan) : The tangent of the input (in radians)
- [tanh](https://docs.cycling74.com/max8/refpages/gen_common_tanh) : The hyperbolic tangent of the input

### Waveform

- [noise](https://docs.cycling74.com/max8/refpages/gen_common_noise) : A random number generator

## [gen\~ Operators](https://docs.cycling74.com/max8/vignettes/gen~_operators)

### Buffer

- [buffer](https://docs.cycling74.com/max8/refpages/gen_dsp_buffer) : References a named buffer~ object in the [gen~](https://docs.cycling74.com/max8/refpages/gen~) object's parent patch. The first argument specifies a name by which to refer to this data in other objects in the gen patcher (such as peek and poke); the second optional argument specifies the name of the external buffer~ object to reference (if ommitted, the first argument name is used). The first outlet sends the length of the buffer in samples; the second outlet sends the number of channels.
- [channels](https://docs.cycling74.com/max8/refpages/gen_dsp_channels) : The number of channels of a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher.
- [cycle](https://docs.cycling74.com/max8/refpages/gen_dsp_cycle) : An interpolating oscillator that reads repeatedly through one cycle of a sine wave. By default it is driven by a frequency input, but if the @index attribute is set to 'phase', it can be driven by a phase input instead.
- [data](https://docs.cycling74.com/max8/refpages/gen_dsp_data) : Stores an array of sample data (64-bit floats) usable for sampling, wavetable synthesis and other purposes. The first argument specifies a name by which to refer to this data in other objects in the gen patcher (such as peek and poke); the second optional argument specifies the length of the array (default 512 samples); and the third optional argument specifies the number of channels (default 1). The first outlet sends the length of the buffer in samples; the second outlet sends the number of channels.
- [dim](https://docs.cycling74.com/max8/refpages/gen_dsp_dim) : The length (in samples) of a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher.
- [lookup](https://docs.cycling74.com/max8/refpages/gen_dsp_lookup) : Index a data/buffer object using a signal, for waveshaping. The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. Input signals in the range -1 to 1 are mapped to the full size of the data/buffer, with linear interpolation. The last inlet specifies a channel offset (default 0).
- [nearest](https://docs.cycling74.com/max8/refpages/gen_dsp_nearest) : Multi-channel lookup a data/buffer object (no interpolation). The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. The input phase ranges from 0 to 1, and wraps outside this range. The last inlet specifies a channel offset (default 0).
- [peek](https://docs.cycling74.com/max8/refpages/gen_dsp_peek) : Read values from a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. The first inlet specifes a sample index to read (no interpolation); indices out of range return zero. The last inlet specifies a channel offset (default 0).
- [poke](https://docs.cycling74.com/max8/refpages/gen_dsp_poke) : Write values into a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument (or third inlet if omitted) specifies which channel to use. The first inlet specifies a value to write, while the second inlet specifies the sample index within the data/buffer. If the index is out of range, no value is written.
- [sample](https://docs.cycling74.com/max8/refpages/gen_dsp_sample) : Linear interpolated multi-channel lookup of a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. The last inlet specifies a channel offset (default 0).
- [splat](https://docs.cycling74.com/max8/refpages/gen_dsp_splat) : Mix values into a data/buffer object, with linear interpolated overdubbing. The first argument should be a name of a data or buffer object in the gen patcher. The second argument (or third inlet if omitted) specifies which channel to use. The first inlet specifies a value to write, while the fractional component of the second inlet specifies a phase (0..1) within the data/buffer (indices out of range will wrap). Splat writes with linear interpolation between samples, and mixes new values with the existing data (overdubbing).
- [wave](https://docs.cycling74.com/max8/refpages/gen_dsp_wave) : Wavetable synthesis using a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. The first inlet specifies phase (0..1), while the second and third inlets specify start/end sample positions within the data/buffer. The last inlet specifies a channel offset (default 0).

### Convert

- [atodb](https://docs.cycling74.com/max8/refpages/gen_dsp_atodb) : Convert linear amplitude to deciBel value
- [dbtoa](https://docs.cycling74.com/max8/refpages/gen_dsp_dbtoa) : Convert deciBel value to linear amplitude
- [ftom](https://docs.cycling74.com/max8/refpages/gen_dsp_ftom) : Frequency given in Hertz is converted to MIDI note number (0-127). Fractional note numbers are supported. The second input sets the tuning base (default 440).
- [mstosamps](https://docs.cycling74.com/max8/refpages/gen_dsp_mstosamps) : Convert period in milliseconds to samples
- [mtof](https://docs.cycling74.com/max8/refpages/gen_dsp_mtof) : MIDI note number (0-127) is converted to frequency in Hertz. Fractional note numbers are supported. The second input sets the tuning base (default 440).
- [sampstoms](https://docs.cycling74.com/max8/refpages/gen_dsp_sampstoms) : Convert period in samples to milliseconds

### Constants

- [fftfullspect](https://docs.cycling74.com/max8/refpages/gen_dsp_fftfullspect), [FFTFULLSPECT](https://docs.cycling74.com/max8/refpages/gen_dsp_fftfullspect) : The pfft~ full spectrum flag (0/1)
- [ffthop](https://docs.cycling74.com/max8/refpages/gen_dsp_ffthop), [FFTHOP](https://docs.cycling74.com/max8/refpages/gen_dsp_ffthop) : The pfft~ FFT hop size
- [fftoffset](https://docs.cycling74.com/max8/refpages/gen_dsp_fftoffset), [FFTOFFSET](https://docs.cycling74.com/max8/refpages/gen_dsp_fftoffset) : The pfft~ FFT offset
- [fftsize](https://docs.cycling74.com/max8/refpages/gen_dsp_fftsize), [FFTSIZE](https://docs.cycling74.com/max8/refpages/gen_dsp_fftsize) : The pfft~ FFT frame size
- [samplerate](https://docs.cycling74.com/max8/refpages/gen_dsp_samplerate), [SAMPLERATE](https://docs.cycling74.com/max8/refpages/gen_dsp_samplerate) : The DSP samplerate
- [vectorsize](https://docs.cycling74.com/max8/refpages/gen_dsp_vectorsize), [VECTORSIZE](https://docs.cycling74.com/max8/refpages/gen_dsp_vectorsize) : The DSP vectorsize

### Dsp

- [fixdenorm](https://docs.cycling74.com/max8/refpages/gen_dsp_fixdenorm) : This operator detects denormal numbers and replaces them with zero. Note: As of Max 6.0 the x87 control flags are set to flush to zero and disable exception handling in audio processing, so denormal fixing should only be required for exported code. A denormal number is a floating point value very close to zero (filling the underflow gap). Calculations with denormal values can be up to 100 times more expensive, so it is often beneficial to replace them with zeroes. Denormals often occur in feedback loops with multipliers, such as filters, delays and exponential decays. Denormal detection is based on a bitmask. Note that feedback operators in gen~ (delay, history) apply fixdenorm to their input signals by default.
- [fixnan](https://docs.cycling74.com/max8/refpages/gen_dsp_fixnan) : This operator replaces NaNs with zero. A NaN (Not a Number) is a floating point data value which represents an undefined or unrepresentable value, such as the result of dividing by zero. Computations on NaNs produce more NaNs, and so it is often preferable to replace the NaN with a zero value. Note that division and modulo operators in gen~ protect against generating NaNs by default.
- [isdenorm](https://docs.cycling74.com/max8/refpages/gen_dsp_isdenorm) : This operator detects denormal numbers and returns 1 if the input is denormal, and zero otherwise. Note: As of Max 6.0 the x87 control flags are set to flush to zero and disable exception handling in audio processing, so denormal fixing should only be required for exported code. A denormal number is a floating point value very close to zero (filling the underflow gap). Calculations with denormal values can be up to 100 times more expensive, so it is often beneficial to replace them with zeroes. Denormals often occur in feedback loops with multipliers, such as filters, delays and exponential decays. Denormal detection is based on a bitmask. Note that feedback operators in gen~ (delay, history) apply fixdenorm to their input signals by default.
- [isnan](https://docs.cycling74.com/max8/refpages/gen_dsp_isnan) : This operator detects the presence of NaN values, returning 1 if the input is NaN, and zero otherwise. A NaN (Not a Number) is a floating point data value which represents an undefined or unrepresentable value, such as the result of dividing by zero. Computations on NaNs produce more NaNs, and so it is often preferable to replace the NaN with a zero value. Note that division and modulo operators in gen~ protect against generating NaNs by default.
- [t60](https://docs.cycling74.com/max8/refpages/gen_dsp_t60) : Given an input T, returns a number X such that, after T multiplications of a signal by X, that signal would be attenuated by 60 decibels. Roughly, -60db = 0db \* pow(X, T). This could be used as a per-sample multiplier (X) to ensure a decay time (of T samples), for example. The name t60 is borrowed from the RT60 time used to measure reverberation time, which specifies the time taken for a signal to decay by 60db, as an approximation of fading to inaudibility.
- [t60time](https://docs.cycling74.com/max8/refpages/gen_dsp_t60time) : Estimates the decay time (in samples) of a given decay factor. That is, given a multiplier X, returns a number T such that, after T multiplications of a signal by X, that signal would be attenuated by 60 decibels. It is the dual of the t60 object.

### Feedback

- [delay](https://docs.cycling74.com/max8/refpages/gen_dsp_delay) : Delays a signal by a certain amount of time (specified in samples). The first argument specifies the maximum delay time (in samples, default samplerate). The second argument specifies the number of tap inlet/outlet pairs (default 1). The first inlet is the signal to be delayed. Additional inlets specify the delay time per tap (in samples). With @feedback 1, like history, delay allows feedback loops in the patcher, but minium delay is 1 sample. With @feedback 0, minimum delay time is zero samples (or more if @interp is cubic, spline, or spline6)
- [history](https://docs.cycling74.com/max8/refpages/gen_dsp_history) : The history operator allows feedback in the gen patcher through the insertion of a single-sample delay. The first argument is an optional name for the history operator, which allows it to also be set externally (in the same way as the param operator). The second argument specifies an initial value of stored history (defaults to zero).

### FFT

- [fftinfo](https://docs.cycling74.com/max8/refpages/gen_dsp_fftinfo) : fftinfo gets constant data about the FFT frames in a patcher loaded by pfft~. If it is used in a patcher that is not loaded by pfft~, it returns default constants instead.

### Filter

- [change](https://docs.cycling74.com/max8/refpages/gen_dsp_change) : Returns the sign of the difference between the current and previous input: 1 if the input is increasing, -1 if decreasing, and 0 if unchanging.
- [dcblock](https://docs.cycling74.com/max8/refpages/gen_dsp_dcblock) : A one-pole high-pass filter to remove DC components. Equivalent to the GenExpr: History x1, y1; y = in1 - x1 + y1\*0.9997; x1 = in1; y1 = y; out1 = y;
- [delta](https://docs.cycling74.com/max8/refpages/gen_dsp_delta) : Returns the difference between the current and previous input.
- [interp](https://docs.cycling74.com/max8/refpages/gen_dsp_interp) : Smoothly mix between inputs, according to an interpolation factor in the range of 0 to 1 (first inlet). The @mode attribute can choose between linear or cosine interpolation to mix between two additional inlets, cubic or spline to mix between four inlets, and spline6 to mix between six inlets. The default mode is linear.
- [latch](https://docs.cycling74.com/max8/refpages/gen_dsp_latch) : Conditionally passes or holds input. The first inlet is the 'input' and the second inlet is the 'control'. When the control is non-zero, the input value is passed through. When the control is zero, the previous input value is output. It can be used to periodically sample & hold a source signal with a simpler trigger logic than the sah operator.
- [phasewrap](https://docs.cycling74.com/max8/refpages/gen_dsp_phasewrap) : Wrap input to the range -pi to +pi
- [sah](https://docs.cycling74.com/max8/refpages/gen_dsp_sah) : The first inlet is the 'input' and the second inlet is the 'control'. When the control makes a transition from being at or below the trigger value to being above the trigger threshold, the input is sampled. The sampled value is output until another control transition occurs, at which point the input is sampled again. The default threshold value is 0, but can be specified as the last inlet/argument. The @init attribute sets the initial previous value to compare to (default 0).
- [slide](https://docs.cycling74.com/max8/refpages/gen_dsp_slide) : Use the slide operator for envelope following and lowpass filtering. Related to the MSP slide~ object.

### Global

- [elapsed](https://docs.cycling74.com/max8/refpages/gen_dsp_elapsed) : The number of samples elapsed since the patcher DSP began, or since the last reset.
- [mc_channel](https://docs.cycling74.com/max8/refpages/gen_dsp_mc_channel) : If used within a patcher inside mc.gen~, the mc_channel operator will return the current channel index. Otherwise, it always returns 1.
- [mc_channelcount](https://docs.cycling74.com/max8/refpages/gen_dsp_mc_channelcount) : If used within a patcher inside mc.gen~, the mc_channelcount operator will return the channel count of the mc.gen~. Otherwise, it always returns 1.
- [voice](https://docs.cycling74.com/max8/refpages/gen_dsp_voice) : If used within a poly~ patcher, the voice operator will return the current voice index (similar to thispoly~). Otherwise, it always returns 1.
- [voicecount](https://docs.cycling74.com/max8/refpages/gen_dsp_voicecount) : If used within a poly~ patcher, the voicecount operator will return the current voice count. Otherwise, it always returns 1.

### Integrator

- [\*=](https://docs.cycling74.com/max8/refpages/gen_dsp_mulequals), [mulequals](https://docs.cycling74.com/max8/refpages/gen_dsp_mulequals) : The object multiplies by, and then outputs, an internal value. This occurs at sample-rate, so the stored value can grow very large or very small, very fast. The value to be multiplied by is specified by either the first inlet or argument. The internal sum can be reset to the minimum by sending a nonzero value to the right-most inlet. The minimum value is 0 by default, but can be changed with the @min attribute. An optional maximum value can be specified with the @max attribute; values will wrap at the maximum.
- [+=](https://docs.cycling74.com/max8/refpages/gen_dsp_plusequals), [accum](https://docs.cycling74.com/max8/refpages/gen_dsp_accum), [plusequals](https://docs.cycling74.com/max8/refpages/gen_dsp_plusequals) : The object adds to, and then outputs, an internal sum. This occurs at sample-rate, so the sum can grow very large, very fast. The value to be added is specified by either the first inlet or argument. The internal sum can be reset to the minimum by sending a nonzero value to the right-most inlet. The minimum value is 0 by default, but can be changed with the @min attribute. An optional maximum value can be specified with the @max attribute; values will wrap at the maximum.
- [counter](https://docs.cycling74.com/max8/refpages/gen_dsp_counter) : Accumulates and outputs a stored count, similarly to Max's counter object, but triggered at sample-rate. The amount to accumulate per sample is set by the first input (incr). The count can be reset by a non-zero value in the second input (reset). The third inlet (max) sets a maximum value; the counter will wrap if it reaches this value. However if the maximum value is set to 0 (the default), the counter will assume no limit and count indefinitely. The first outlet outputs the current count, the second outlet outputs 1 when the count wraps at the maximum and zero otherwise, and the third outlet outputs the number of wraps (the carry count).

### Numeric

- [round](https://docs.cycling74.com/max8/refpages/gen_dsp_round) : Returns the integral value that is nearest to the input, with halfway cases rounded away from zero.

### Waveform

- [phasor](https://docs.cycling74.com/max8/refpages/gen_dsp_phasor) : A non-bandlimited sawtooth-waveform signal generator which can be used as LFO audio signal or a sample-accurate timing/control signal.
- [rate](https://docs.cycling74.com/max8/refpages/gen_dsp_rate) : The rate operator time-scales an input phase (such as from a phasor) by a multiplier. Multipliers less than 1 create several ramps per phase cycle.
- [train](https://docs.cycling74.com/max8/refpages/gen_dsp_train) : train~ generates a pulse signal whose period is specifiable in terms of samples. The first input sets the pulse period (in samples). The second input sets the pulse width (default 0.5). The third inlet sets the phase of the 'on' portion (default 0.)
- [triangle](https://docs.cycling74.com/max8/refpages/gen_dsp_triangle) : A triangle/ramp wavetable with input to change phase offset of the peak value. The phase ranges from 0 to 1 (and wraps outside these values). With a duty cycle of 0, it produces a descending sawtooth; with a duty cycle of 1 it produces ascending sawtooth; with a duty cycle of 0.5 it produces a triangle waveform. Output values always bounded in 0 to 1.

## [Jitter Operators](https://docs.cycling74.com/max8/vignettes/gen_jitter_operators)

### Color

- [hsl2rgb](https://docs.cycling74.com/max8/refpages/gen_jit_hsl2rgb) : Convert HSL to RGB, preserving alpha
- [rgb2hsl](https://docs.cycling74.com/max8/refpages/gen_jit_rgb2hsl) : Convert RGB to HSL, preserving alpha

### Coordinate

- [cell](https://docs.cycling74.com/max8/refpages/gen_jit_cell) : Cell coordinates of input matrix [0, dim-1]
- [dim](https://docs.cycling74.com/max8/refpages/gen_jit_dim) : Dimensions of input matrix
- [norm](https://docs.cycling74.com/max8/refpages/gen_jit_norm) : Normalized coordinates of input matrix [0, 1]
- [snorm](https://docs.cycling74.com/max8/refpages/gen_jit_snorm) : Signed normalized coordinates of input matrix [-1, 1]

### Quaternion

- [qconj](https://docs.cycling74.com/max8/refpages/gen_jit_qconj) : Get the conjugate of a quaternion.
- [qmul](https://docs.cycling74.com/max8/refpages/gen_jit_qmul) : Multiply quaternion inputs
- [qrot](https://docs.cycling74.com/max8/refpages/gen_jit_qrot) : Rotate a vector by a quaternion. The equation of the rotation is q*v*q^-1.

### Sampling

- [nearest](https://docs.cycling74.com/max8/refpages/gen_jit_nearest) : Nearest neighbor sample a matrix at a given coordinate (normalized). Nearest has a boundmode attribute that can be set to wrap, mirror or clamp.
- [nearestpix](https://docs.cycling74.com/max8/refpages/gen_jit_nearestpix) : Nearest neighbor sample a matrix at a given coordinate (in pixels). Nearest has a boundmode attribute that can be set to wrap, mirror or clamp.
- [sample](https://docs.cycling74.com/max8/refpages/gen_jit_sample) : Sample a matrix at a given coordinate (normalized) with linear interpolation. Sample has a boundmode attribute that can be set to wrap, mirror or clamp.
- [samplepix](https://docs.cycling74.com/max8/refpages/gen_jit_samplepix) : Sample a matrix at a given coordinate (in pixels) with linear interpolation. Pixel centers are located at PIXEL+0.5. For example, the center of the upper-left pixel is (0.5, 0.5). Samplepix has a boundmode attribute that can be set to wrap, mirror or clamp.

### Surface

- [circle](https://docs.cycling74.com/max8/refpages/gen_jit_circle) : Equation of a circle taking input coordinates ranging from [0, 1]
- [cone](https://docs.cycling74.com/max8/refpages/gen_jit_cone) : Equation of a cone taking input coordinates ranging from [0, 1]
- [cylinder](https://docs.cycling74.com/max8/refpages/gen_jit_cylinder) : Equation of a cylinder taking input coordinates ranging from [0, 1]
- [plane](https://docs.cycling74.com/max8/refpages/gen_jit_plane) : Equation of a plane taking input coordinates ranging from [0, 1]
- [sphere](https://docs.cycling74.com/max8/refpages/gen_jit_sphere) : Equation of a sphere taking input coordinates ranging from [0, 1]
- [torus](https://docs.cycling74.com/max8/refpages/gen_jit_torus) : Equation of a torus taking input coordinates ranging from [0, 1]

### Vector

- [concat](https://docs.cycling74.com/max8/refpages/gen_jit_concat) : Concatenate vector values into a larger vector
- [cross](https://docs.cycling74.com/max8/refpages/gen_jit_cross) : Take the cross product of two vectors
- [dot](https://docs.cycling74.com/max8/refpages/gen_jit_dot) : Take the dot product of two vectors
- [faceforward](https://docs.cycling74.com/max8/refpages/gen_jit_faceforward) : Return a vector pointing in the same direction as another
- [length](https://docs.cycling74.com/max8/refpages/gen_jit_length) : Returns the length of a vector
- [normalize](https://docs.cycling74.com/max8/refpages/gen_jit_normalize) : Normalize a vector to unit length
- [reflect](https://docs.cycling74.com/max8/refpages/gen_jit_reflect) : Reflect a vector off a surface defined by a normal
- [refract](https://docs.cycling74.com/max8/refpages/gen_jit_refract) : Refract a vector through a surface defined by a normal and a refraction index
- [rotor](https://docs.cycling74.com/max8/refpages/gen_jit_rotor) : Return a quaternion that can rotate the first input into the second.
- [swiz](https://docs.cycling74.com/max8/refpages/gen_jit_swiz) : Unpack and remap vector components
- [vec](https://docs.cycling74.com/max8/refpages/gen_jit_vec) : Pack scalar values into a vector
