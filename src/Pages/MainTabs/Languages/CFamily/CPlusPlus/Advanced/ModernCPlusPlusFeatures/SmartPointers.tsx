import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SmartPointers = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ModernCFeatures/SmartPointers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Smart Pointers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SmartPointers;
