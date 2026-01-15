import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LifecycleAndMonoBehaviours = () => {
  const markdownFilePath = 'Engines/Unity/Basics/Scripting/LifecycleAndMonoBehaviours';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lifecycle & MonoBehaviours" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LifecycleAndMonoBehaviours;
