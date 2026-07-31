import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
