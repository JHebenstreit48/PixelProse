import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ProfilingAndBenchmarks = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Performance/ProfilingAndBenchmarks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiling & Benchmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilingAndBenchmarks;
