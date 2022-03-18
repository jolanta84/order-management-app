# Orders viewer

## Instrukcja uruchomienia projektu

W celu uruchomienia aplikacji wymagane jest uruchomienie odpowiedniego API.

W konsoli:

$ npm run db 

Przechodzimy do http://localhost:3000/ i API powinno się uruchomić.

Aby uruchomić projekt należy:

$ npm install

$ ng serve 

Przechodzimy do http://localhost:4200/ aby uruchomić aplikację. Po uruchomieniu wyświetla się strona logowania. 

## Opis modułów / funkcjonalności

### Rejestracja
Pozwala na utworzenie nowego użytkownika, podając:
- Imię i nazwisko
- Email
- Hasło 

Wszystkie pola są obligatoryjne.
Dodatkowo adres email musi mieć odpowiedni format zgodny ze zdefiniowanym regexem.

Wszelkie błędy walidacji wyświetlane są w postaci snackbar.

Proces rejestracji kończy się przejściem do okna **Logowania**.

### Logowanie
Pozwala na zalogowanie się do aplikacji, podając:
- Email
- Hasło

Wszystkie pola są obligatoryjne.
Podobnie jak w Rejestracji, wszystkie błędy walidacji wyświetlane są w postaci snackbar.

Proces logowania kończy się przejściem do okna **Listy zamówień**.

### Lista zamówień
Okno wyświetla zamówień w postaci listy zawierającej następujące kolumny:
1. Nazwa zamówienia 
2. Status
3. Data utworzenia 
4. Liczba pudełek

Aplikacja umożliwia wyszukiwanie (filtrowanie) zamówień wg statusów:
1. Open
2. Closed
3. In transit

Możliwe jest wyszukiwanie na zasadzie multiselect, tzn. użytkownik może określić jeden lub wiele statusów.

## RWD
Aplikacja została zaimplementowana jako *Responsive web design* tak, aby poprawnie była wyświetlana na mniejszych rozdzielczościach (np. urządzeniach mobilnych).

## Kod źródłowy / praca z GIT
Podczas tworzenia projektu zostało zastosowane podejście *Git flow*, czyli praca na branchach.

Repozytorium zawiera 2 główne branche:
1. develop (pełniący rolę brancha developerskiego)
2. main (pełniący rolę brancha *produkcyjnego*)

Oprócz powyższych, repozytorium zawiera również szereg *feature branches*, które odpowiadały poszczególnym modułom (iteracjom), podczas pracy nad projektem.

Każda iteracja kończyła się merge *feature branch* do brancha *develop*.

Docelowo, po zakończeniu poszczególnych modułów, zaleca się usunięcie sprawdzonych i zweryfikowanych *feature branches*.



