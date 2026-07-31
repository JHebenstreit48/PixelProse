import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const UnrealInsights = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/ProfilingAndAnalysis/UnrealInsights';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unreal Insights" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnrealInsights;
