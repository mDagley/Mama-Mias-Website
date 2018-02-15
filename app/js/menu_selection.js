var section = document.getElementById("section_select");

section.onchange = function()
{
    if(this.selectedIndex !== 0)
        {
            window.location.hash = this.value;
        }
}