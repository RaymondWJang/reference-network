# Reference Network
[![codecov](https://codecov.io/gh/RaymondWJang/reference-network/graph/badge.svg?token=3FP4FI26NL)](https://codecov.io/gh/RaymondWJang/reference-network)

The Reference Network is a Python application designed to create, visualize, and analyze reference networks from academic publications. It leverages libraries such as NetworkX for network analysis, PyVis for interactive visualization, and Graphviz for static graph rendering, providing a comprehensive toolset for researchers, librarians, and anyone interested in bibliometrics.

## Features

- **Network Creation**: Easily construct reference networks using publication metadata, including DOIs, titles, and authors.
- **Interactive Visualization**: Generate interactive visualizations of reference networks with PyVis, enabling users to explore the connections between publications through a web-based interface.
- **Static Graph Rendering**: Produce high-quality static images of reference networks using Graphviz, suitable for publication in academic journals or presentations.
- **Analysis Tools**: Utilize NetworkX to calculate network metrics such as centrality, clustering coefficients, and more, offering insights into the structure and characteristics of the reference network. (TODO)

## Installation

To install Reference Network, you will need Python 3.10 or later.:

```sh
git clone https://github.com/RaymondWJang/reference-network
```
## Usage

Please refer to docs/zotero_integration.md for retrieving your Zotero library in a compatible format.
Below is a simple example of how to create a reference network, add publications, and generate an interactive visualization:

```python
from reference_network import (
    CSVDataFetcher,
    DataParser,
    ReferenceGraph,
    InteractiveVisualizer,
    StaticVisualizer,
)
from config import PLOT_CONFIG, DATA_CONFIG


def test_e2e_workflow():
    df = CSVDataFetcher(filepath=DATA_CONFIG.data_path)

    zotero_data = df.load_zotero_exported_file()

    parser = DataParser()
    zotero_database = parser.transform_df_to_publication_database(zotero_data)
    delay_between_requests = df.request_rate_limit()
    database = parser.populate_references(
        zotero_database, df, delay_between_requests=delay_between_requests
    )

    graph = ReferenceGraph()
    graph.ingest_publication_database(database)

    i_visualizer = InteractiveVisualizer(graph, config=PLOT_CONFIG)
    i_visualizer.visualize()

    s_visualizer = StaticVisualizer(graph, config=PLOT_CONFIG)
    s_visualizer.visualize()
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
