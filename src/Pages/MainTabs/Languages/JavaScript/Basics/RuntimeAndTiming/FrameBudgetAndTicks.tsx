import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FrameBudgetAndTicks = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/RuntimeAndTiming/FrameBudgetAndTicks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frame Budget & Ticks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameBudgetAndTicks;
