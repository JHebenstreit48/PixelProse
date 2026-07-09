import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
