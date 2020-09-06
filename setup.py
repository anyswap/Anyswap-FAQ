from setuptools import (
    find_packages,
    setup,
)

with open("README.md", "r") as fh:
    long_description = fh.read()
    setup(
        name='anyswap-FAQ',  
        version='1.0.0',
        scripts=[] ,
        author="Marcel Cure",
        description="Anyswap FAQ and useful information",
        long_description=long_description,
        long_description_content_type="text/markdown",
        url="https://github.com/anyswap/Anyswap-FAQ",
        packages=find_packages(),
        setup_requires=['setuptools-markdown'],
        classifiers=[
         "Operating System :: OS Independent",
         'Programming Language :: Python :: 3.7',
         'Natural Language :: English',
        ],
        keywords=[
            'Fusion Protocol','blockchain','Decentralized finance', 'Anyswap', 'DEX',
        ],
    )
