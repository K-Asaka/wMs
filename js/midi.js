var midi = null;        // グローバルなMIDIAccessオブジェクト

// システムエクスクルーシブを使うか指定(trueで許可)
navigator.requestMIDIAccess({sysex: true}).then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log("MIDI ready!");
    midi = midiAccess;
    listInputsAndOutputs(midi);
}

function onMIDIFailure(msg) {
    console.log("Failed to get MIDI access - " + msg);
}

function listInputsAndOutputs(midiAccess) {
    console.log(midiAccess);
    for (var input in midiAccess.inputs) {
        console.log("Input port [type: '" + input.type + "'] id: '"
            + input.id + "' manufacture: '" + input.manufacturer
            + "' name: '" + input.name + "' version: '" + input.version + "'");
    }

    for (var output in midiAccess.outputs) {
        console.log("Output port [type: '" + output.type + "'] id: '"
            + output.id + "' manufacture: '" + output.manufacturer
            + "' name: '" + output.name + "' version: '" + output.version + "'");        
    }
}