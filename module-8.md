# Module 8: Data

## Biosignals and Medical Electronics

### Physiology

#### Homeostasis

Maintaining relatively constant physical and chemical conditions of the internal environment, though there are changes in the external environment. Consists of:

- **Receptor** senses an environmental change or stimuli
- **Control center** processes information supplied by receptor and generates a response (command)
- **Effector** is an organ or cell that responds to the command of control center.

A variation outside the desired range triggers an automatic response to correct the situation, i.e., negative feedback.

Types of chemical regulation:

| Type | Response time | Acts | Lasts |
| - | - | - | - |
| Hormonal (hormone or active chemical substance in blood/tissue) | Slow | Extensively | Long time |
| Nervous (body functions controlled by nervous system) | Fast | Exactly or locally | Short time |

#### Body fluids

| Type | Fluid location | Fluid volume | Cation |
| - | - | - | - |
| Extracellular fluid (ECF)  | Inside cells | 33% | Lot of Na+ |
| Intracellular fluid (ICF) | Outside cells | 57% | Lot of K+ |

#### Cell physiology

Movement of molecules and ions across a membrane; membranes are selectively permeable with a separation of charge across them:

| Type | Direction | Metabolic energy |
| - | - | - |
| Diffusion  | High → low concentration | Not required |
| Active transport | Low → high concentration | Requires ATP + carrier proteins |

##### Simple diffusion

- Non-carrier mediated transport
- Powered by thermal energy of diffusing molecules
- Stops when equal concentration
- Speed depends on:
  - Magnitude of concentration
	- Permeability of the membrane (shape and size)
	- Temperature (higher ⇒ faster)
	- Surface area

##### Active transport

- Na+ – K+ pump
- Energy dependent since moves against concentration gradient
- Steep gradient ⇒ involvement in electrochemical impulses

##### Resting potential

- V<sub>mem</sub> is caused by Na+ – K+ pump; Na+ is pumped outside (and K+ inside) the cell
- This creates Diffusion (due to Δ concentration) and Drift/migration (due to Δ charge)
- Concentration difference of charge creates potential difference, i.e.,  V<sub>mem</sub> = V<sub>ICF</sub> – V<sub>ECF</sub>
- Nerst's Equation calculates voltage difference across membrane V<sub>ion</sub> = (RT/zF) log (\[C]<sub>o</sub>/\[C]<sub>i</sub>) ≈ 61 log (\[C]<sub>o</sub>/\[C]<sub>i</sub>)
- V<sub>mem, rest</sub> for all cells is between –85 and –60 mV
- Only few (nerve, muscle) cells have the ability to  use and alter the membrane potential to initiate and propagate electrical signals

#### Neurons

Parts of a nerve cell or neuron:

- Nucleus
- Dendrites (docking stations for incoming signals from other neurons, look like branches)
- Axon (outgoing highway to send electrical signal, can be connected to other neurons or muscles, looks like a wire of Schwann cells, can be up to 1 meter)

V<sub>mem</sub> can change due to:

- Other neurons sending signals to dendrites
- Changes from inside the cell altering K+ and Na+ concentrations

##### Action potentials (AP)

- Membrane has voltage gated Na+ and K+ channels
- Positive feedback occurs if, e.g., sudden influx of Na+ to cell
- If V<sub>mem</sub> rises, channels open, Na+ in, K+ out, more channels open, etc.
- This gives rise to the action potential:
  - Threshold potential: Critical membrane potential level for action potential to occur
  - Threshold stimulus: Just strong enough to depolarize membrane to threshold potential level
- AP is produced by increase in Na+ (V<sub>ICF</sub> ↑), then after a short delay K+ increases (V<sub>ICF</sub> ↓)
- Refractory Periods:
  - Absolute: No new AP can be generated (0–1ms)
	- Relative: New AP can be generate with stronger stimulus (1–3ms)
	
Evolutionary improvement:

- Conduction rate of membrane is slow; axon electrical properties are poor (high R, charge leak)
- Multiple Schwann cells on one axon with Myelin to prevent ion movement through membrane
- AP only occurs at nodes; myelination ⇒ axon protection, faster conduction rate, energy efficiency)

##### Synapses

- Axon terminals no physical contact with other neurons' dendrites
- AP at axon end triggers chemical release (neurotransmitters)
- Many axons can be connected to dendrites of single neuron, i.e., 1 neuron firing triggers many neurons
- Connections are flexible and can change over time

#### Electrophysiological communication

- One motor neuron controls multiple muscle fibers
- 1 motor neuron's AP leads to Multiple AP in the muscle fibers
- Summed AP is Motor Unit Action Potential (MUAP)
- Multiple Motor Units are firing at the same time, sum of MUAPs is voltage outside via skin

### Potentiometry

In the following section, the body is modeled as an electrolyte (aqueous, salty solution), with the contact point being the electrode modeled as a metal.

There are two possibilities:

1. Polarization
  - A charged metal will attract ions with the opposite charge, creating a double layer
  - No electrons cross the electrode-electrolyte barrier (like a capacitor)
	- Metal has to be noble (chemically inert) and external voltage should be low, to prevent electron exchange
2. Electron transfer, redox
  - Basic metals react with ions in solution, electron transfer takes place
  - A (half cell) potential *wrt* standard potential is generated, calculated with Nernst's Equation
	
There should be a second electrode to close the system with a stable and constant potential, i.e., reference electrode.
	
#### Electrodes

- **Electrolyte** is an aqueous solution; ions carry the charge
- **Electrode** is a piece of metal; electrons transfer charge
- **Electrochemical cells** are the electrodes separated by electrolyte
- **Cell potential** is potential difference across the electrodes of an electrochemical cell
- **Half reaction** is electrochemical reaction at one of the two electrolyte/electrode interfaces
- **Working electrode** is electrode of interest
- **Reference electrode** is electrode with stable and known cell potential

Potentiometry is the measurement of a working electrode potential *wrt* a reference electrode as a function of the concentration of some chemical species in the electrolyte at (almost) zero current.

##### Ag/AgCl reference electrode

- Ag/AgCl wire is kept in a saturated KCl solution with solid KCl crystals at the bottom
- Even if Cl- leaks out of the electrode, solid KCl will dissolve to keep solution saturated
- KCl solution should remain saturated to ensure concentration of Cl- ∴ cell potential is constant

#### Electrode-skin contact

Two types of electrodes:

| Electrode type | R<sub>F</sub> value | Behavior |
| - | - | - |
| Polarisable | Very large | Capacitive (no DC current) |
| Non-polarisable | Very small | Resistive (DC current ⇒ e<sup>-</sup> transfer) |

Non-polarisable electrodes are used ∵ redox reactions are allowed and there is low Ohmic contact.

As non-polarisable electrodes, Ag/AgCl electrodes are used:

- Helps reducing interfacial potentials (result of the dissimilar electrolytic interfaces)
- Electrolytic gel enhances conductivity
- Relatively low-cost and general-purpose electrode
- Particularly suited for long-term use

#### Electrophysiological measurements

##### ElectroMyoGraphy (EMG)

- Measures the electric activity of active muscle fibers
- Electrodes connected very close to the measured muscle group
- Rough indication of the muscle activity from rectified and integrated signal
- Needle electrodes for individual muscle fibers
- Main sources of errors are 50/60 Hz and RF interference
- Amplitude: 1 to 10 mV, Bandwidth: 20 Hz to 20 kHz

##### ElectroCardioGraphy (ECG)

- Measures the electric activity of the heart
- Detects tiny electrical changes on skin that arise from the heart muscle depolarizing during each heartbeat
- More uniform, repetitive ∵ way more cell synchronization in heartbeats
- Signals are stronger and less sensitive to noise

### Amplifiers

| ECG amplifier (heart) | EEG amplifier (brain) | EMG amplifier (muscles) | EOG amplifier (eyes) |
| - | - | - | - |
| Requires isolation from power line and ground | Gain must be μV, Requires low front-end electronic noise | Post-processing circuits needed | High gain, low frequency/DC response<br>DC-drifting correction may be necessary |

#### Problem in biomedical measurement

- In the cell membrane, ICF (inside) is more negative than ECF (outside)
- Membrane potential (at rest) is not simply sum of ion potentials (see diagram)
- Thevenin's theorem: All the separate voltage sources inside and Cs and Rs inside can be modeled as a single non-ideal source V<sub>TH</sub> with a series impedance Z<sub>TH</sub>

#### Differential measurement techniques

- Measure at 2 different position A and B the source of interest such that it contributes as different as possible at these 2 potentials (v<sub>A</sub> and v<sub>B</sub>)
- At A and B, error sources N will contribute equally and can be cancelled
- Differential signal: v<sub>1</sub> = v<sub>A</sub> + v<sub>noise</sub>, v<sub>2</sub> = v<sub>b</sub> + v<sub>noise</sub> ⇒ v<sub>diff</sub> = v<sub>2</sub> – v<sub>1</sub> = v<sub>A</sub> – v<sub>B</sub>
- Common mode signal (average):  v<sub>icm</sub> = 1/2 (v<sub>i1</sub> + v<sub>i2</sub>)

##### Non-ideal amplifiers

- Amplifier has two gains: A<sub>d</sub> and A<sub>cm</sub>
- Ideally, A<sub>d</sub> very large and A<sub>cm</sub> ~ 0
- In practice, Acm ≠ 0, common mode noise and disturbance present at output of amplifier ∵ v<sub>cm</sub> is amplified a bit
- v<sub>o</sub> = A<sub>d</sub>v<sub>i,d</sub> + A<sub>cm</sub>v<sub>icm</sub> (see diagram)

##### Common Mode Rejection Ratio (CMMR)

- CMMR = |A<sub>d</sub>| / |A<sub>cm</sub>| or 20 log(|A<sub>d</sub>| / |A<sub>cm</sub>|)
- Very, very large CMRR (>> 120dB) needed for clinical measurements

#### Operational Amplifier (OpAmp)

See diagrams (important)

### Noise

- Noise is random fluctuations of signal
- Produced by variations in components within system or external effects of environment
- Multiple noise sources can be present and added, i.e., v<sub>meas</sub> = v<sub>signal</sub>(t) + Σv<sub>noise,i</sub>

#### Noise values

##### Top value

- Direct measure for signal strength
- Total measured value v<sub>meas,max</sub> = v<sub>signal,max</sub> + v<sub>noise,max</sub>

##### Noise power

- P(t) = v(t) i(t) \[W]
- Average power of signal is p<sub>avg</sub> = 1/T ∫ p(t) dt
- For resistor R, average power is p<sub>avg</sub> = 1/T ∫ (v<sup>2</sup>(t) / R) dt
- For R = 1 Ω, is p<sub>avg</sub> = 1/T ∫ v<sup>2</sup>(t) dt
- Power is distributed over frequency ranges, so  focus only on certain bandwidth

##### Noise voltages

- For R = 1 Ω, V<sub>RMS</sub> = √(P<sub>avg</sub>)
- v<sub>RMS, meas</sub> = √(v<sub>RMS,signal</sub><sup>2</sup> + v<sub>RMS,noise</sub><sup>2</sup>)

##### Signal-to-noise Ratio (SNR)

- SNR = p<sub>avg,signal</sub> / p<sub>avg,noise</sub> or 10 log(p<sub>avg,signal</sub> / p<sub>avg,noise</sub>) in dB
- SNR voltages = v<sub>RMS,signal</sub><sup>2</sup> / v<sub>RMS,noise</sub><sup>2</sup> or 20 log(v<sub>RMS,signal</sub><sup>2</sup> / v<sub>RMS,noise</sub><sup>2</sup>) in dB

#### Noise in electrophysiological measurements

- Noise sources within body can be solve by correct placement of electrodes (Common Mode Signal), e.g., strong heart activity can be removed by placing electrodes s.t. heart signal is equal in both electrodes
- Noise sources from the environment, e.g., many 50 Hz sources, non-ideal components

##### Types of electronic noise

1. Thermal noise (or Johnson noise)
  - All electrical components that have resistance generate it
  - Higher the temperature, more the thermal noise
  - Has components at all frequencies with noise power equal in all bands
  - White noise with flat frequency spectrum
	- Theoretically infinite bandwidth, but in practice limited to operational bandwidth
	- Power of thermal noise P = 4kTB (independent of R)
	- RMS voltage of thermal noise v<sub>RMS,n</sub> = √(4kTBR)
2. Shot noise
  - Discrete and granular current caused by individual charge carriers
  - Modeled by a current source I<sub>RMS,n</sub> = √(2qBI)
3. Amplifier noise
  - All amplifiers generate noise as a system level
  - Noise at output is is weighted sum of all sources
  - In general, larger the A, larger the noise
  - Modeled as equivalent noise source at input
  - v<sub>RMS_noise,output</sub>=v<sub>RMS_noise,specs</sub>A√B
	
##### Remedies for noise

- Elimination: Correct electrode placement, cooling, preventing movement, etc.
- Shielding: Conductive sleeve over electrode lead creates additional capacitive coupling
- Filtering: Can be used if noise frequency is not the same as signal frequency
- Corrections can be applied if noise source can be precisely characterized
