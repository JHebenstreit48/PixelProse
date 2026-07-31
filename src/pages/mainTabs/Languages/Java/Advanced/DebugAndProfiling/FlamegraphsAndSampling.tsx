import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FlamegraphsAndSampling = () => {
  const markdownFilePath = 'Languages/Java/Advanced/DebugAndProfiling/FlamegraphsAndSampling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flamegraphs & Sampling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlamegraphsAndSampling;
