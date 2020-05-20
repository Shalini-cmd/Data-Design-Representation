# Databasing_and_Scraping
All my web scraping codes are included in this folder
Please note all of this code is written by me and are not to be used for business purposes
Web-Scraping, Mongo DB Projects: This repository has all basic web scraping codes to help anyone start with scraping
IF you are looking for a complete end to end scraping project.
Please note we use BeautifulSoup Python Library extensively here<br>
Give the Ebay Scraping Code a Look, it follows an entire scraping pipeline<br>
- Extract all the URLs from Ebay
- Split the URLs into two text files - one with sponsored listings and another with non-sponsored listings
- Use regex expressions to extract HTML content specific to product details
- Make necessary data type formatting and cleaning
- Simplify categorical variables wherever necessary: for e.g.
-- Changing price from US dollars to cent format. Prices to be inserted as INT
-- Changing Yes/No or True/false columns into binary (1/0) format
-- Treating for missing values and Nan values in the dataset should be changed to NULL
- Create a MySQL database named 'Ebay' and store it in a database table

Hotel Listings Scraping:<br>
- Scraped from Trivago and Hotels.com for a period of 1 day in San Francisco
- Each of the listings detail is stored in a html file
- Scrape details like hotel name, address, contact number, ratings, hotel reviews, amenities, rewards to avail,price, special deals,
sponsored listing or not,etc.
- Analyzing the data from the 2 sources
- Creating SQL tables and uploading data from each source into one table
- run SQL code to find common listings and record your observations<br>
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
