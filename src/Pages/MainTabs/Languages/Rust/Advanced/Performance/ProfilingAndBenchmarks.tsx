import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilingAndBenchmarks = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Performance/ProfilingAndBenchmarks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiling & Benchmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilingAndBenchmarks;
