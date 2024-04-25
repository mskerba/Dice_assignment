import random
import json

# Helper functions
def generate_title():
    titles = ["Data Analyst", "Regional Data Representative", "Software Developer", "Project Manager", "Graphic Designer",
              "Research Scientist", "Product Manager", "HR Specialist", "Marketing Coordinator", "Financial Analyst"]
    return random.choice(titles)

def generate_author():
    first_names = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth"]
    last_names = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"]
    return f"{random.choice(first_names)} {random.choice(last_names)}"

def generate_genre():
    genres = [
        "Fiction", "Non-Fiction", "Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance", "Western", "Dystopian",
        "Contemporary", "Horror", "Historical", "Young Adult (YA)", "Children's", "Adventure", "Self-help", "Motivational",
        "Health", "Guide / How-to", "Travel", "Biography", "Autobiography", "Memoir", "Cooking", "Art", "True Crime",
        "Religion", "History", "Science", "Poetry", "Essays", "Anthology", "Comics", "Graphic Novel", "LGBTQ+", "Cultures & Places",
        "Social & Political Issues", "Business & Economics", "Philosophy", "Psychology", "Educational", "Law", "Sports"
    ]
    return random.choice(genres)

def generate_year():
    return str(random.randint(2020, 2100))

# Generate the list of objects
data_list = [{"title": generate_title(), "author": generate_author(), "genre": generate_genre(), "year": generate_year(), "id": str(i)} for i in range(1, 10001)]

# Convert the list to JSON
json_data = json.dumps(data_list, indent=2)
json_data[:1000]  # Display a portion to check the output
