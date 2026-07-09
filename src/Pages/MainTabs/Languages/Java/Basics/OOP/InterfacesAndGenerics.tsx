import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterfacesAndGenerics = () => {
  const markdownFilePath = 'Languages/Java/Basics/OOP/InterfacesAndGenerics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interfaces & Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndGenerics;
