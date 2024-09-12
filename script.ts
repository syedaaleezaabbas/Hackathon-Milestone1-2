document.addEventListener('DOMContentLoaded', function() {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;

    let isSkillsVisible = true;

    toggleSkillsButton.addEventListener('click', function() {
        if(isSkillsVisible) {
            skillsSection.classList.add('hidden');
        } else {
            skillsSection.classList.remove('hidden')
        }
        isSkillsVisible =! isSkillsVisible;
    })
})