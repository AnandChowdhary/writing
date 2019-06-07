# Biosignals and Medical Electronics

## Lecture Slides

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
  - At electrode, a(half cell) potential *wrt* standard potential is generated
	
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

##### Amplifiers

| ECG amplifier (heart) | EEG amplifier (brain) | EMG amplifier (muscles) | EOG amplifier (eyes) |
| - | - | - | - |
| Requires isolation from power line and ground | Gain must be μV, Requires low front-end electronic noise | Post-processing circuits needed | High gain, low frequency/DC response<br>DC-drifting correction may be necessary |
