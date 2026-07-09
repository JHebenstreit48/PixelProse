import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
