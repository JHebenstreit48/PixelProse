import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
