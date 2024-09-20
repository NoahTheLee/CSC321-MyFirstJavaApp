<script>
  // Get all the sections
  const sections = document.querySelectorAll('section');

  sections.forEach(section > {
    // Get the tag name (in this case 'section') and the class name
    tagName = section.tagName.toLowerCase();
    const className = section.className;

    // Create a new div element for the label
    const label = document.createElement('div');
    label.className = 'label';
    label.innerText = `${tagName}.${className}`;  // e.g., "section.intro"

    // Append the label to the section
    section.appendChild(label);
  });
</script>
