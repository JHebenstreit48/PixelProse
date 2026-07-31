import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
