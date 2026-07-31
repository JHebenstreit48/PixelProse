import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
