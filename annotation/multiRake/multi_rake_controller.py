from multi_rake import Rake
import sys

rake = Rake()

text = sys.argv[1];

keywords = rake.apply(text);

keywords_filtered = [ word for word, match in keywords];

for x in keywords_filtered[:10]:
        print(x);
