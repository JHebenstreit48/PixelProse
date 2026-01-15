import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TaskGroupsAndCancel = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Concurrency/TaskGroupsAndCancel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Task Groups & Cancel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskGroupsAndCancel;
