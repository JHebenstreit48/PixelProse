import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FlamegraphsAndSampling = () => {
  const markdownFilePath = 'Languages/Java/Advanced/DebugAndProfiling/FlamegraphsAndSampling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Flamegraphs & Sampling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlamegraphsAndSampling;
