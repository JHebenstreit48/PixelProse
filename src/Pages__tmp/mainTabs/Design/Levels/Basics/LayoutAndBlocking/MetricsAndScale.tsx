import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MetricsAndScale = () => {
  const markdownFilePath = 'Design/Levels/Basics/LayoutAndBlocking/MetricsAndScale';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metrics & Scale" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetricsAndScale;
