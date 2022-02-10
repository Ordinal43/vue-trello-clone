const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const inputRequired = v => !!v || 'Required!'
export const inputEmail = v => !!v.match(REGEX_EMAIL) || 'E-mail invalid!'

export const MIMETYPE_IMAGES = ['image/png', 'image/jpeg', 'image/png']
