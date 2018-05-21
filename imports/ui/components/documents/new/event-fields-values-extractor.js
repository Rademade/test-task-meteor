export class EventFieldsValuesExtractor {
  fieldSelector = '.form-control';

  constructor(event) {
    this._event = event;
  }

  fields() {
    let fields = [];
    $(this._event.target).find(this.fieldSelector).each(function (_) {
      let input = $(this);
      fields.push({
        value: input.val(),
        fieldId: input.attr('id')
      })
    });
    return fields;
  }
}
