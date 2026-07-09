import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NumericPerformance = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/SIMDAndMath/NumericPerformance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Numeric Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NumericPerformance;
