export const getFiltersLayout = (filtersArray) =>
  `
<section class="main__filter filter container">
${filtersArray.map(getFilterLayout).join(``)}
</section>
`.trim();

const getFilterLayout = ({title, count}, index) => `
<input
  type="radio"
  id="filter__all"
  class="filter__input visually-hidden"
  name="filter"
  ${index === 0 ? `checked` : ``}
  ${count === 0 ? `disabled` : ``}
/>
<label for="filter__all" class="filter__label">
  ${title} <span class="filter__all-count">${count}</span></label>`;

// EOF
