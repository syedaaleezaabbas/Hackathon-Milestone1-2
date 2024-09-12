document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    var skillsSection = document.getElementById('skillsSection');
    var isSkillsVisible = true;
    toggleSkillsButton.addEventListener('click', function () {
        if (isSkillsVisible) {
            skillsSection.classList.add('hidden');
        }
        else {
            skillsSection.classList.remove('hidden');
        }
        isSkillsVisible = !isSkillsVisible;
    });
});
