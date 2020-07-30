export default links => `
<div class="main-section">

<div class="left-side-nav">

  <ul>
  ${links.map(link => 
    {return `<a href="/${link.title}">${link.text}</a><br>`}
    ).join("")}
  </ul>

</div>
`;