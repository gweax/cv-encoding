# cv-encoding

An encoding from base64 to consonant/vowel syllables

# Why?

Base64 is an encoding that is capable of converting binary data to printable characters. It uses a set of 64 characters: lower case letters, upper case letters, digits, plus (+), slash (/) and equality (=) as a 65th for a possible padding at the end.

However, Base64 can be difficult to read, since one might confuse 0 and O, or I and l and 1.

Sometimes, you have to type or speak out Base64 encoded strings, for example when entering a one time password sent to you via mail.

# What?

What if `c0JpKL1n` would be replaced by `fiso-neja-nino-suho`? Wouldn't that be much easier to read and to type and to memorize (if it was a password)? It would.

# How?

The alphabet consist of 5 vowels and 21 consonants. If we omit consonants that sound similar and keep 13 of them, we have 13 * 5 possible syllables consisting of a consonant and a vowel (hence `cv-encoding`). We can now replace each character of Base64 with a syllable. To increase readability, we add a dash or a space after every two syllables.

# Phonemes

Which consonants do we pick? We want to avoid homophones, that is syllables that sound the same but are written differently (e.g. `ji` and `gi`). We want to avoid sets of consonants that can be pronounced differently (e.g. in German, the `v` can be pronounced as both `f` and `w`, we should only use one consonant per set).

The problem is that these phonemes differ between languages. The best I came up with - having had English and German in mind - is `bdfghklmnprst`.