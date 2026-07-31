import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TaskGroupsAndCancel = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Concurrency/TaskGroupsAndCancel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Task Groups & Cancel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskGroupsAndCancel;
