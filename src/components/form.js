import {getCardDate, getCardTime, COLORS} from "./utils";

const getRepeatingDaysLayout = (repeatingDays, id) => {
  return Object.keys(repeatingDays)
    .map((day) =>
      `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}-${id}"
        name="repeat"
        value="${day}"
        ${repeatingDays[day] ? `checked` : ``}
      />
      <label
        class="card__repeat-day"
        for="repeat-${day}-${id}">
        ${day}
      </label>`
    )
    .join(``);
};

const getHashTagsLayout = (tagsArray) => {
  return tagsArray.map((tag) => `
  <span class="card__hashtag-inner">
    <input
      type="hidden"
      name="hashtag"
      value="${tag}"
      class="card__hashtag-hidden-input"
    />
    <p class="card__hashtag-name">
      #${tag}
    </p>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
  </span>`)
  .join(``);
};

const getColorPickerLayout = (activeColor, id) => {
  return COLORS.map((color) => {
    return `
    <input
      type="radio"
      id="color-${color}-${id}"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
      ${color === activeColor ? `checked` : ``}
    />
    <label
      for="color-${color}-${id}"
      class="card__color card__color--${color}"
      >${color}</label
    >`;
  }).join(``);
};

export const getFormLayout = ({description, dueDate, repeatingDays, tags, color, id}) =>
  `
<article class="card card--edit card--${color} ${
  Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `card--repeat` : ``
}">
  <form class="card__form" method="get">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--archive">
        archive
      </button>
      <button
        type="button"
        class="card__btn card__btn--favorites card__btn--disabled"
      >
        favorites
      </button>
    </div>

    <div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>

    <div class="card__textarea-wrap">
      <label>
        <textarea
          class="card__text"
          placeholder="Start typing your text here..."
          name="text"
        >${description}</textarea>
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">yes</span>
          </button>

          <fieldset class="card__date-deadline">
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder=""
                name="date"
                value="${getCardDate(dueDate)} ${getCardTime(dueDate)}"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">yes</span>
          </button>

          <fieldset class="card__repeat-days">
            <div class="card__repeat-days-inner">
              ${getRepeatingDaysLayout(repeatingDays, id)}
            </div>
          </fieldset>
        </div>

        <div class="card__hashtag">
          <div class="card__hashtag-list">
            ${getHashTagsLayout(Array.from(tags))}
          </div>

          <label>
            <input
              type="text"
              class="card__hashtag-input"
              name="hashtag-input"
              placeholder="Type new hashtag here"
            />
          </label>
        </div>
      </div>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          ${getColorPickerLayout(color, id)}
        </div>
      </div>
    </div>

    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>
</article>
  `;

// EOF
