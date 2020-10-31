# Contact list

## Upload contact list
{ initialData = upload() }

{ lastName = input({ label: "last name" }) }
{ firstName = input({ label: "first name" }) }
{ phone = input({ label: "phone", type: "phone" }) }
{ email = input({ label: "email", type: "email" }) }

{
  button({
    label: "Add to contacts",
    onClick: () => append({ lastName, firstName, phone, email })
  })
}

{ pretty(data) }

{ download({ value: JSON.stringify(data), label: "Export as JSON" })}

<style>
  blockquote {
    display: none;
  }
</style>

> { data = contactList(initialData) }
