import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LifecycleAndMonoBehaviours = () => {
  const markdownFilePath = 'Engines/Unity/Basics/Scripting/LifecycleAndMonoBehaviours';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lifecycle & MonoBehaviours" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LifecycleAndMonoBehaviours;
