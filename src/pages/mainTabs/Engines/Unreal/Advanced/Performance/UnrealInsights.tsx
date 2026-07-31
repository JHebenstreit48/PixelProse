import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnrealInsights = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Performance/UnrealInsights';

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
