document.getElementById('saveSettings').addEventListener('click', () => {
    const standUpInterval = document.getElementById('standUpInterval').value;
    const stretchInterval = document.getElementById('stretchInterval').value;
    const eyeCareInterval = document.getElementById('eyeCareInterval').value;
    const waterInterval = document.getElementById('waterInterval').value;
    const ergonomicCheckInterval = document.getElementById('ergonomicCheckInterval').value;

    const settings = {
        standUpInterval: standUpInterval * 60 * 1000,
        stretchInterval: stretchInterval * 60 * 1000,
        eyeCareInterval: eyeCareInterval * 60 * 1000,
        waterInterval: waterInterval * 60 * 1000,
        ergonomicCheckInterval: ergonomicCheckInterval * 60 * 1000,
    };

    window.electron.sendSettings(settings);
});
