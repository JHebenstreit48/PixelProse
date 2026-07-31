import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
