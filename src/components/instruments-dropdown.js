import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function InstrumentsDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="min-h-6">
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="max-h-[500px] overflow-auto"
        onAction={(key) => console.log(key)}
      >
        <DropdownItem key={"0"}>Acoustic Grand Piano</DropdownItem>
        <DropdownItem key={"1"}>Bright Acoustic Piano</DropdownItem>
        <DropdownItem key={"2"}>Electric Grand Piano</DropdownItem>
        <DropdownItem key={"3"}>Honky-tonk Piano</DropdownItem>
        <DropdownItem key={"4"}>Rhodes Piano</DropdownItem>
        <DropdownItem key={"5"}>Chorused Piano</DropdownItem>
        <DropdownItem key={"6"}>Harpsichord</DropdownItem>
        <DropdownItem key={"7"}>Clavinet</DropdownItem>
        <DropdownItem key={"8"}>Celesta</DropdownItem>
        <DropdownItem key={"9"}>Glockenspiel</DropdownItem>
        <DropdownItem key={"10"}>Music Box</DropdownItem>
        <DropdownItem key={"11"}>Vibraphone</DropdownItem>
        <DropdownItem key={"12"}>Marimba</DropdownItem>
        <DropdownItem key={"13"}>Xylophone</DropdownItem>
        <DropdownItem key={"14"}>Tubular Bells</DropdownItem>
        <DropdownItem key={"15"}>Dulcimer</DropdownItem>
        <DropdownItem key={"16"}>Hammond Organ</DropdownItem>
        <DropdownItem key={"17"}>Percussive Organ</DropdownItem>
        <DropdownItem key={"18"}>Rock Organ</DropdownItem>
        <DropdownItem key={"19"}>Church Organ</DropdownItem>
        <DropdownItem key={"20"}>Reed Organ</DropdownItem>
        <DropdownItem key={"21"}>Accordion</DropdownItem>
        <DropdownItem key={"22"}>Harmonica</DropdownItem>
        <DropdownItem key={"23"}>Tango Accordion</DropdownItem>
        <DropdownItem key={"24"}>Acoustic Nylon Guitar</DropdownItem>
        <DropdownItem key={"25"}>Acoustic Steel Guitar</DropdownItem>
        <DropdownItem key={"26"}>Electric Jazz Guitar</DropdownItem>
        <DropdownItem key={"27"}>Electric Clean Guitar</DropdownItem>
        <DropdownItem key={"28"}>Electric Muted Guitar</DropdownItem>
        <DropdownItem key={"29"}>Overdriven Guitar</DropdownItem>
        <DropdownItem key={"30"}>Distortion Guitar</DropdownItem>
        <DropdownItem key={"31"}>Guitar Harmonics</DropdownItem>
        <DropdownItem key={"32"}>Acoustic Bass</DropdownItem>
        <DropdownItem key={"33"}>Fingered Electric Bass</DropdownItem>
        <DropdownItem key={"34"}>Plucked Electric Bass</DropdownItem>
        <DropdownItem key={"35"}>Fretless Bass</DropdownItem>
        <DropdownItem key={"36"}>Slap Bass 1</DropdownItem>
        <DropdownItem key={"37"}>Slap Bass 2</DropdownItem>
        <DropdownItem key={"38"}>Synth Bass 1</DropdownItem>
        <DropdownItem key={"39"}>Synth Bass 2</DropdownItem>
        <DropdownItem key={"40"}>Violin</DropdownItem>
        <DropdownItem key={"41"}>Viola</DropdownItem>
        <DropdownItem key={"42"}>Cello</DropdownItem>
        <DropdownItem key={"43"}>Contrabass</DropdownItem>
        <DropdownItem key={"44"}>Tremolo Strings</DropdownItem>
        <DropdownItem key={"45"}>Pizzicato Strings</DropdownItem>
        <DropdownItem key={"46"}>Orchestral Harp</DropdownItem>
        <DropdownItem key={"47"}>Timpani</DropdownItem>
        <DropdownItem key={"48"}>String Ensemble 1</DropdownItem>
        <DropdownItem key={"49"}>String Ensemble 2</DropdownItem>
        <DropdownItem key={"50"}>Synth Strings 1</DropdownItem>
        <DropdownItem key={"51"}>Synth Strings 2</DropdownItem>
        <DropdownItem key={"52"}>Choir "Aah"</DropdownItem>
        <DropdownItem key={"53"}>Choir "Ooh"</DropdownItem>
        <DropdownItem key={"54"}>Synth Voice</DropdownItem>
        <DropdownItem key={"55"}>Orchestral Hit</DropdownItem>
        <DropdownItem key={"56"}>Trumpet</DropdownItem>
        <DropdownItem key={"57"}>Trombone</DropdownItem>
        <DropdownItem key={"58"}>Tuba</DropdownItem>
        <DropdownItem key={"59"}>Muted Trumpet</DropdownItem>
        <DropdownItem key={"60"}>French Horn</DropdownItem>
        <DropdownItem key={"61"}>Brass Section</DropdownItem>
        <DropdownItem key={"62"}>Synth Brass 1</DropdownItem>
        <DropdownItem key={"63"}>Synth Brass 2</DropdownItem>
        <DropdownItem key={"64"}>Soprano Sax</DropdownItem>
        <DropdownItem key={"65"}>Alto Sax</DropdownItem>
        <DropdownItem key={"66"}>Tenor Sax</DropdownItem>
        <DropdownItem key={"67"}>Baritone Sax</DropdownItem>
        <DropdownItem key={"68"}>Oboe</DropdownItem>
        <DropdownItem key={"69"}>English Horn</DropdownItem>
        <DropdownItem key={"70"}>Bassoon</DropdownItem>
        <DropdownItem key={"71"}>Clarinet</DropdownItem>
        <DropdownItem key={"72"}>Piccolo</DropdownItem>
        <DropdownItem key={"73"}>Flute</DropdownItem>
        <DropdownItem key={"74"}>Recorder</DropdownItem>
        <DropdownItem key={"75"}>Pan Flute</DropdownItem>
        <DropdownItem key={"76"}>Bottle Blow</DropdownItem>
        <DropdownItem key={"77"}>Shakuhachi</DropdownItem>
        <DropdownItem key={"78"}>Whistle</DropdownItem>
        <DropdownItem key={"79"}>Ocarina</DropdownItem>
        <DropdownItem key={"80"}>Square Wave Lead</DropdownItem>
        <DropdownItem key={"81"}>Sawtooth Wave Lead</DropdownItem>
        <DropdownItem key={"82"}>Calliope Lead</DropdownItem>
        <DropdownItem key={"83"}>Chiff Lead</DropdownItem>
        <DropdownItem key={"84"}>Charang Lead</DropdownItem>
        <DropdownItem key={"85"}>Voice Lead</DropdownItem>
        <DropdownItem key={"86"}>Fifths Lead</DropdownItem>
        <DropdownItem key={"87"}>Bass Lead</DropdownItem>
        <DropdownItem key={"88"}>New Age Pad</DropdownItem>
        <DropdownItem key={"89"}>Warm Pad</DropdownItem>
        <DropdownItem key={"90"}>Polysynth Pad</DropdownItem>
        <DropdownItem key={"91"}>Choir Pad</DropdownItem>
        <DropdownItem key={"92"}>Bowed Pad</DropdownItem>
        <DropdownItem key={"93"}>Metallic Pad</DropdownItem>
        <DropdownItem key={"94"}>Halo Pad</DropdownItem>
        <DropdownItem key={"95"}>Sweep Pad</DropdownItem>
        <DropdownItem key={"96"}>Rain Effect</DropdownItem>
        <DropdownItem key={"97"}>Soundtrack Effect</DropdownItem>
        <DropdownItem key={"98"}>Crystal Effect</DropdownItem>
        <DropdownItem key={"99"}>Atmosphere Effect</DropdownItem>
        <DropdownItem key={"100"}>Brightness Effect</DropdownItem>
        <DropdownItem key={"101"}>Goblins Effect</DropdownItem>
        <DropdownItem key={"102"}>Echoes Effect</DropdownItem>
        <DropdownItem key={"103"}>Sci-Fi Effect</DropdownItem>
        <DropdownItem key={"104"}>Sitar</DropdownItem>
        <DropdownItem key={"105"}>Banjo</DropdownItem>
        <DropdownItem key={"106"}>Shamisen</DropdownItem>
        <DropdownItem key={"107"}>Koto</DropdownItem>
        <DropdownItem key={"108"}>Kalimba</DropdownItem>
        <DropdownItem key={"109"}>Bagpipe</DropdownItem>
        <DropdownItem key={"110"}>Fiddle</DropdownItem>
        <DropdownItem key={"111"}>Shanai</DropdownItem>
        <DropdownItem key={"112"}>Tinkle Bell</DropdownItem>
        <DropdownItem key={"113"}>Agogo</DropdownItem>
        <DropdownItem key={"114"}>Steel Drums</DropdownItem>
        <DropdownItem key={"115"}>Woodblock</DropdownItem>
        <DropdownItem key={"116"}>Taiko Drum</DropdownItem>
        <DropdownItem key={"117"}>Melodic Tom</DropdownItem>
        <DropdownItem key={"118"}>Synth Drum</DropdownItem>
        <DropdownItem key={"119"}>Reverse Cymbal</DropdownItem>
        <DropdownItem key={"120"}>Guitar Fret Noise</DropdownItem>
        <DropdownItem key={"121"}>Breath Noise</DropdownItem>
        <DropdownItem key={"122"}>Seashore</DropdownItem>
        <DropdownItem key={"123"}>Bird Tweet</DropdownItem>
        <DropdownItem key={"124"}>Telephone Ring</DropdownItem>
        <DropdownItem key={"125"}>Helicopter</DropdownItem>
        <DropdownItem key={"126"}>Applause</DropdownItem>
        <DropdownItem key={"127"}>Gun Shot</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default InstrumentsDropdown;
